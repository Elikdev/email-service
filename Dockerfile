FROM node:14
WORKDIR /usr/src/app
COPY ./email-service/package*.json /usr/src/app/
RUN npm install
COPY ./email-service/ /usr/src/app/
EXPOSE 4000
CMD [ "node", "server.js" ]