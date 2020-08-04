FROM node:14-alpine

ENV APP_DIR /app/backend

RUN mkdir -p /app/backend
WORKDIR $APP_DIR
COPY package.json $APP_DIR/package.json
COPY yarn.lock $APP_DIR/yarn.lock

RUN yarn global add @nestjs/cli
RUN yarn