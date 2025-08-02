import mongoose from 'mongoose';

/**
 * Wrapper function for database operations with timeout handling
 * @param {Function} operation - The database operation to execute
 * @param {number} timeout - Timeout in milliseconds (default: 15000)
 * @returns {Promise} - Promise that resolves with the operation result or rejects with timeout error
 */
export const withTimeout = async (operation, timeout = 15000) => {
    return Promise.race([
        operation(),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Database operation timed out')), timeout)
        )
    ]);
};

/**
 * Check if database connection is ready
 * @returns {boolean} - True if connected, false otherwise
 */
export const isDbConnected = () => {
    return mongoose.connection.readyState === 1;
};

/**
 * Wait for database connection to be ready
 * @param {number} maxWaitTime - Maximum time to wait in milliseconds
 * @returns {Promise<boolean>} - True if connected within time limit
 */
export const waitForDbConnection = async (maxWaitTime = 30000) => {
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWaitTime) {
        if (isDbConnected()) {
            return true;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return false;
};

/**
 * Retry database operation with exponential backoff
 * @param {Function} operation - The database operation to execute
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} baseDelay - Base delay in milliseconds
 * @returns {Promise} - Promise that resolves with the operation result
 */
export const retryDbOperation = async (operation, maxRetries = 3, baseDelay = 1000) => {
    let lastError;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await withTimeout(operation);
        } catch (error) {
            lastError = error;
            
            if (attempt === maxRetries) {
                throw error;
            }
            
            const delay = baseDelay * Math.pow(2, attempt);
            console.log(`Database operation failed (attempt ${attempt + 1}/${maxRetries + 1}). Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    throw lastError;
};
