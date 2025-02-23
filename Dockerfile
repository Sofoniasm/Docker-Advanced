FROM node:14.17.0-alpine3.13

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire source code to the working directory
COPY src/ ./src/

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
