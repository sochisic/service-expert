FROM node:10
WORKDIR /usr/src/app
COPY docker/package*.json .
RUN npm install
COPY build/ .
COPY docker/server.js .
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD node server.js


