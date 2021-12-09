FROM node:12-alpine

WORKDIR /app

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
