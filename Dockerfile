FROM node:18 AS build

RUN npm install -g @angular/cli

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ng build --configuration=production

FROM nginx:alpine

COPY --from=build /app/dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

