# Frontend Deployment Guide

## Environment Configuration

### Required Environment Variables

Create a `.env` file in the client directory with the following variables:

```env
# Backend API URL
# For local development: http://localhost:4000/api/v1
# For production: https://your-backend-project.vercel.app/api/v1
VITE_BACKEND_LINK=https://your-backend-project.vercel.app/api/v1
```

### Important Notes:

1. **Replace the URL**: Update `your-backend-project.vercel.app` with your actual Vercel backend URL
2. **Include `/api/v1`**: The backend expects requests to include the API version path
3. **Use HTTPS**: Always use HTTPS for production deployments

## Deployment Steps

### Option 1: Vercel Deployment

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard:**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add `VITE_BACKEND_LINK` with your backend URL

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Manual Environment Setup

1. **Create `.env` file:**
   ```bash
   cd client
   echo "VITE_BACKEND_LINK=https://your-backend-project.vercel.app/api/v1" > .env
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   # Deploy the dist folder to your hosting provider
   ```

## Troubleshooting

### Common Issues:

1. **Network Error (ERR_CONNECTION_REFUSED):**
   - Check if `VITE_BACKEND_LINK` is set correctly
   - Ensure the backend URL is accessible
   - Verify the backend is deployed and running

2. **CORS Errors:**
   - Make sure your backend CORS configuration includes your frontend domain
   - Check the `allowedOrigins` array in `server.js`

3. **Environment Variables Not Working:**
   - Vite requires environment variables to start with `VITE_`
   - Redeploy after setting environment variables
   - Check variable names match exactly

## Local Development

To run locally with your deployed backend:

1. **Create `.env` file:**
   ```env
   VITE_BACKEND_LINK=https://your-backend-project.vercel.app/api/v1
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

## API Configuration

The frontend uses the following API configuration:

- **Base URL**: Set via `VITE_BACKEND_LINK` environment variable
- **Credentials**: Enabled for cookie-based authentication
- **Headers**: JSON content type
- **Error Handling**: Automatic redirect on 401 errors

## Testing the Connection

After deployment, test the connection by:

1. Opening your frontend application
2. Trying to log in or register
3. Checking the browser's Network tab for successful API calls
4. Verifying the backend URL in the requests 