FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --production
COPY . .
RUN pnpm build
CMD ["pnpm", "start:prod"]
EXPOSE 3000
