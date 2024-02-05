FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install --production
CMD ["pnpm", "start:prod"]
EXPOSE 3000
