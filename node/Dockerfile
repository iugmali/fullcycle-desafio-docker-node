FROM node:16-alpine
ENV NODE_ENV="development"

RUN apk add --no-cache bash
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /bin
RUN chmod +x /bin/wait-for-it.sh

WORKDIR /app
COPY package.json .
ARG NODE_ENV

RUN npm install
RUN chown -R node /app/node_modules
COPY . ./

EXPOSE 3000