FROM node:8-alpine

# Create the directory that will contain the app, and make subsequent commands run from this directory
WORKDIR /app

# Copy only files required for npm install so that cached layer is used unless dependencies have changed
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the app's files
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]