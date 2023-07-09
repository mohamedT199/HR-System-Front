FROM nginx
COPY dist/front/* /usr/shared/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

