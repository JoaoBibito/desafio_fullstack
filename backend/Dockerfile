FROM node:18

WORKDIR /src/app

RUN apt-get update && apt-get install -y \
  default-mysql-client \
  netcat-openbsd \
  curl

COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src
COPY prisma ./prisma 

RUN npm install

RUN npx prisma generate

RUN npx prisma --version

RUN npm run build 

EXPOSE 3000

CMD ["npm", "run", "start"]
