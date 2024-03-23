FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN echo $(npm i)
COPY . .
RUN echo $(npm run build)
RUN echo $(serve -s build)