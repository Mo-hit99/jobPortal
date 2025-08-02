import { getErrorMessage, ERROR_MESSAGES } from '../services/api';

/**
 * Centralized error handling utility
 * Provides consistent error handling across the application
 */

// Error types for different scenarios
export const ERROR_TYPES = {
  NETWORK: 'NETWORK',
  AUTH: 'AUTH',
  VALIDATION: 'VALIDATION',
  SERVER: 'SERVER',
  UNKNOWN: 'UNKNOWN'
};

/**
 * Get error type based on error response
 * @param {Error} error - The error object
 * @returns {string} - Error type
 */
export const getErrorType = (error) => {
  if (!error.response) {
    return ERROR_TYPES.NETWORK;
  }
  
  const status = error.response.status;
  
  if (status >= 500) {
    return ERROR_TYPES.SERVER;
  } else if (status === 401 || status === 403) {
    return ERROR_TYPES.AUTH;
  } else if (status === 400 || status === 422) {
    return ERROR_TYPES.VALIDATION;
  }
  
  return ERROR_TYPES.UNKNOWN;
};

/**
 * Handle API error with consistent messaging
 * @param {Error} error - The error object
 * @param {string} defaultMessage - Default error message
 * @param {Function} setError - Function to set error state
 * @param {Function} setLoading - Function to set loading state (optional)
 */
export const handleApiError = (error, defaultMessage, setError, setLoading = null) => {
  const errorMessage = getErrorMessage(error, defaultMessage);
  const errorType = getErrorType(error);
  
  // Set error message
  if (setError) {
    setError(errorMessage);
  }
  
  // Set loading to false if provided
  if (setLoading) {
    setLoading(false);
  }
  
  // Log error for debugging
  console.error(`API Error (${errorType}):`, {
    message: errorMessage,
    originalError: error,
    status: error.response?.status,
    data: error.response?.data
  });
  
  return {
    message: errorMessage,
    type: errorType,
    status: error.response?.status
  };
};

/**
 * Handle form validation errors
 * @param {Object} errors - Validation errors object
 * @param {Function} setError - Function to set error state
 */
export const handleValidationError = (errors, setError) => {
  const errorMessages = Object.values(errors).filter(Boolean);
  if (errorMessages.length > 0) {
    setError(errorMessages[0]);
  }
};

/**
 * Create a retry function for failed API calls
 * @param {Function} apiCall - The API function to retry
 * @param {number} maxRetries - Maximum number of retries (default: 3)
 * @param {number} delay - Delay between retries in ms (default: 1000)
 * @returns {Function} - Retry function
 */
export const createRetryFunction = (apiCall, maxRetries = 3, delay = 1000) => {
  return async (...args) => {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await apiCall(...args);
      } catch (error) {
        lastError = error;
        
        // Don't retry on validation or auth errors
        const errorType = getErrorType(error);
        if (errorType === ERROR_TYPES.VALIDATION || errorType === ERROR_TYPES.AUTH) {
          throw error;
        }
        
        // If this is the last attempt, throw the error
        if (attempt === maxRetries) {
          throw error;
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay * attempt));
      }
    }
    
    throw lastError;
  };
};

/**
 * Show user-friendly error message based on error type
 * @param {string} errorType - Type of error
 * @param {string} customMessage - Custom error message
 * @returns {string} - User-friendly error message
 */
export const getUserFriendlyMessage = (errorType, customMessage = '') => {
  if (customMessage) {
    return customMessage;
  }
  
  switch (errorType) {
    case ERROR_TYPES.NETWORK:
      return ERROR_MESSAGES.NETWORK_ERROR;
    case ERROR_TYPES.SERVER:
      return ERROR_MESSAGES.SERVER_ERROR;
    case ERROR_TYPES.AUTH:
      return "Authentication failed. Please login again.";
    case ERROR_TYPES.VALIDATION:
      return "Please check your input and try again.";
    default:
      return ERROR_MESSAGES.UNKNOWN_ERROR;
  }
};

export { ERROR_MESSAGES }; 