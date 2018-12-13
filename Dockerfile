FROM node:10.14.2-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm i --silent

EXPOSE 3000

CMD [ "npm", "start" ]
