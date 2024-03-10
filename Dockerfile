FROM node:alpine as base

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
RUN npm install -g npm

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN npm ci

FROM base as runtime

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# Build and run the app
CMD npm start