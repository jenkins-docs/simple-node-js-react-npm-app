FROM node:12-alpine

WORKDIR /apps

RUN npm install -g serve

COPY ./build ./build

CMD ["serve", "-s", "build", "-l", "3000"]