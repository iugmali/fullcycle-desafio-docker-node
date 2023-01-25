FROM node:16-alpine
ENV NODE_ENV="development"
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN npm install
RUN chown -R node /app/node_modules
COPY . ./
EXPOSE 3000
CMD node index.js