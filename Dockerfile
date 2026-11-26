# Use Node.js v22.14.0 LTS alpine
FROM node:22.14.0-alpine

# Set working directory
WORKDIR /sdvxwiki

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose Next.js default development port
EXPOSE 3000
