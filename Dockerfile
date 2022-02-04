FROM node:latest
FROM nginx:latest
WORKDIR /server
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN npm start
EXPOSE 4000
