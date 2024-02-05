FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn build
CMD ["yarn", "start:prod"]
EXPOSE 3000
