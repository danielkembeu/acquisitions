FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* .

COPY . .

RUN npm install

EXPOSE 3100

CMD ["npm", "start"]

