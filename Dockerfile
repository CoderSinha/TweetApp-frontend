FROM node:16.15.0 as build
WORKDIR /app

COPY  package*.json .
RUN npm install
COPY . .
RUN npm run build-prod

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/TweetApp-Frontend/ /usr/share/nginx/html
