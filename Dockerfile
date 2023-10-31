# develop stage
FROM node:18-alpine3.16 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn sass:compile@all
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]