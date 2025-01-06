FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

FROM node:18-alpine-slim

WORKDIR /app

COPY --from=build /app/dist . 

EXPOSE 3000

CMD ["npm", "start"]
