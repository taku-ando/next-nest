FROM node:12.10

ENV APP_DIR /app/frontend
ENV PATH /app/frontend/node_modules/.bin:$PATH
ENV HOST 0.0.0.0

RUN mkdir -p /app/frontend
WORKDIR $APP_DIR
COPY package.json $APP_DIR/package.json
COPY yarn.lock $APP_DIR/yarn.lock
RUN yarn install
COPY . $APP_DIR