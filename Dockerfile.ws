FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./packages ./packages

COPY ./bun.lock ./bun.lock

COPY ./package-lock.json ./package-lock.json

COPY ./package.json ./package.json

COPY ./turbo.json ./turbo.json

COPY ./apps/ws-backend ./apps/ws-backend

COPY . .

RUN bun install
RUN bun run db:generate

EXPOSE 8081

CMD ["bun","run","start:websocket"]