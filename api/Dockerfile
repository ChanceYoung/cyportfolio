FROM node:12-alpine

WORKDIR /app

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN npm install --production=true

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
