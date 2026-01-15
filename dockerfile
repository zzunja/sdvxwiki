# Use Node.js v22.14.0 LTS slim
FROM node:22.14.0-slim

# Set working directory
WORKDIR /sdvxwiki

# Install build tools for any future native modules
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose Next.js default development port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]