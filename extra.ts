
    //   - run: |
    //       echo "${{ secrets.SSH_PRIVATE_KEY }}" &> ~/ssh_key
    //       chmod 700 /home/runner/ssh_key
    //       ssh -o StrictHostKeyChecking=no -i ~/ssh_key root@64.227.147.124 -t "docker stop user_backend && docker run --name user_backend -d -p 8080:8080 saikat2105/user-app-backend:${{ github.sha }}"


















    // "db:generate":"cd packages/db && npx  prisma generate && cd ../..",



















//     FROM oven/bun:1

// ARG DATABASE_URL
// ENV DATABASE_URL=$DATABASE_URL

// WORKDIR /usr/src/app

// COPY ./packages ./packages

// COPY ./bun.lock ./bun.lock

// COPY ./package-lock.json ./package-lock.json

// COPY ./package.json ./package.json

// COPY ./turbo.json ./turbo.json

// COPY ./apps/web ./apps/web

// COPY . .

// RUN bun install

// RUN bun run build
// RUN echo "Database URL is: $DATABASE_URL" 

// EXPOSE 3000

// CMD ["bun","run","start:web"]