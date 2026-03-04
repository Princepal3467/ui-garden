FROM node:18-alpine

WORKDIR /princepal_princepal_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose Storybook port
EXPOSE 8083

# Run Storybook on port 8083
CMD ["npm", "run", "storybook", "--", "-p", "8083"]