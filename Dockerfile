FROM node:6.10.0-alpine

# Create app directory
RUN mkdir -p /app

# Bundle app source
COPY ./src /app
COPY package.json /app/package.json

# Install app dependencies
WORKDIR /app
RUN npm install --production

CMD [ "npm", "start" ]