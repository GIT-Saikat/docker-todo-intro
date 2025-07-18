FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./packages ./packages

COPY ./bun.lock ./bun.lock

COPY ./package-lock.json ./package-lock.json

COPY ./package.json ./package.json

COPY ./turbo.json ./turbo.json

COPY ./apps/http-backend ./apps/http-backend

COPY . .

RUN bun install
RUN bun run db:generate

EXPOSE 8080

CMD ["bun","run","start:backend"]