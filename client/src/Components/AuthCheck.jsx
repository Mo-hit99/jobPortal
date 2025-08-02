import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { authAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api';

const AuthCheck = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get user data from the server
        const response = await authAPI.checkAuth();
        if (response.data && response.data.user) {
          dispatch(setUser(response.data.user));
        }
      } catch (error) {
        // If auth check fails, clear user state (this is normal when not logged in)
        const errorMessage = getErrorMessage(error, ERROR_MESSAGES.CHECK_AUTH);
        console.error('Auth check error:', errorMessage);
        dispatch(setUser(null));
      }
    };

    // Only check if we don't have a user
    if (!user) {
      checkAuth();
    }
  }, [dispatch, user]);

  return null; // This component doesn't render anything
};

export default AuthCheck; 