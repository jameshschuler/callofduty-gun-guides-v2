FROM node:latest as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --quiet

COPY . .

RUN npx prisma generate

# Production image

FROM node:latest
WORKDIR /usr/src/app
ENV NODE_ENV production

COPY package*.json ./
RUN npm ci --only=production --quiet

COPY . .

EXPOSE 5001
ENTRYPOINT ["npm", "run"]