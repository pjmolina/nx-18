FROM nginx:1.23.1-alpine

COPY ./dist/apps/nxapp1/browser /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
