FROM node

WORKDIR /app

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8080

CMD ["nodemon", "index.js" ]
