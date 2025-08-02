# Vercel Deployment Guide

## Prerequisites
1. Make sure you have a Vercel account
2. Install Vercel CLI: `npm i -g vercel`

## Environment Variables
Set these environment variables in your Vercel dashboard:

### Required Variables:
- `MONGO_URL`: Your MongoDB connection string
- `JWT_SECRET`: A secure random string for JWT token signing
- `CLIENT_LINK`: Your frontend URL (e.g., https://your-frontend.vercel.app)

### Optional Variables:
- `EMAIL_USER`: Email for nodemailer (if using email features)
- `EMAIL_PASS`: Email password/app password
- `NODE_ENV`: Set to "production"

## Deployment Steps

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm deployment settings

4. **Set Environment Variables:**
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add all required variables

5. **Redeploy after setting environment variables:**
   ```bash
   vercel --prod
   ```

## API Endpoints

Your API will be available at:
- Base URL: `https://your-project.vercel.app`
- Health Check: `https://your-project.vercel.app/health`
- Users: `https://your-project.vercel.app/api/v1/users`
- Company: `https://your-project.vercel.app/api/v1/company`
- Jobs: `https://your-project.vercel.app/api/v1/jobs`
- Applications: `https://your-project.vercel.app/api/v1/application`

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Failed:**
   - Check if `MONGO_URL` is correct
   - Ensure MongoDB Atlas IP whitelist includes Vercel's IPs (0.0.0.0/0)

2. **CORS Errors:**
   - Update `CLIENT_LINK` in environment variables
   - Add your frontend domain to allowed origins in server.js

3. **Function Timeout:**
   - Functions are set to 30 seconds max duration
   - Optimize database queries if needed

4. **Environment Variables Not Working:**
   - Redeploy after setting environment variables
   - Check variable names match exactly

## Local Development

To run locally:
```bash
npm install
npm run dev
```

## Production vs Development

The server automatically detects the environment:
- Development: Runs on localhost with `app.listen()`
- Production: Exports app for Vercel serverless functions 