FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "run", "start"]

EXPOSE 3000