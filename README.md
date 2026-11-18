# parcial2-v2-software

**Alumno:** Marcos Gonzalvez
**Fecha:** 18/11/2026
**Materia:** Ingeniería de Software — ISTEA

## Descripción

Aplicación web estática de **gestión de tareas** (HTML, CSS y JavaScript) servida con **nginx** dentro de un contenedor Docker.

## Prerrequisitos

- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución

## Construir e iniciar el contenedor

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/makuharg/parcial2-v2-software.git
   cd parcial2-v2-software
   ```

2. Construir la imagen:

   ```bash
   docker build -t parcial2-v2-software .
   ```

3. Iniciar el contenedor:

   ```bash
   docker run -d --rm -p 8080:80 --name parcial2 parcial2-v2-software
   ```

4. Abrir en el navegador: [http://localhost:8080](http://localhost:8080)

5. Detener el contenedor:

   ```bash
   docker stop parcial2
   ```