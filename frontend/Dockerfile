FROM node:alpine AS build
WORKDIR /app
COPY . .

ENV REACT_APP_SERVER=https://desafiovollapi.herokuapp.com
ENV PORT=3000
RUN ["npm", "i"]
RUN ["npm", "run", "build"]


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./deploy/default.conf.template /etc/nginx/conf.d/default.conf.template
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'