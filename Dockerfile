# Imagen base liviana de nginx
FROM nginx:alpine

# Copiamos solo los archivos de la app a la carpeta que sirve nginx
COPY index.html styles.css app.js /usr/share/nginx/html/

# nginx escucha en el puerto 80
EXPOSE 80