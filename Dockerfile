ARG NODE_VERSION=22.14.0-alpine

FROM node:${NODE_VERSION}

RUN apk add --no-cache curl bash git

ENV BUN_INSTALL=/usr/local

RUN curl -fsSL https://bun.sh/install | bash

ENV NG_CLI_ANALYTICS=ci
ENV CI=true

WORKDIR /app

COPY package.json bun.lockb* bun.lock* ./

RUN bun install

COPY . .

EXPOSE 4200

ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=200

CMD ["bun", "run", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]