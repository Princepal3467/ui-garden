FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of project
COPY . .

# Expose Storybook port
EXPOSE 8083

# Start Storybook correctly
CMD ["npm", "run", "storybook"]