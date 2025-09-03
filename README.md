# MinHero 🦸‍♂️

Aplicación realizada en Angular v19.2.15 (última LTS hasta la fecha) testeada con **NPM** y **Bun** como package managers.
Este README documenta cómo levantar el proyecto en local y mediante **Docker** para desarrollo y pruebas.

---

## 🚀 Requisitos previos

- [Node.js 22.14.0](https://nodejs.org/)
- [Bun 1.2.17](https://bun.sh/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Scripts disponibles

Definidos en el `package.json`:

- `[npm] run start` → Levanta Angular DevServer (`ng serve`)
- `[npm] run build` → Genera build de producción
- `[npm] run watch` → Build en modo watch
- `[npm] run test` → Ejecuta tests con Jest
- `[npm] run test:watch` → Ejecuta tests en modo watch
- `[npm] run test:coverage` → Genera reporte de cobertura

---

## ▶️ Levantar el proyecto (local)

```bash
# Instalar dependencias
[npm] install
```
```bash
# Levantar en modo dev (http://localhost:4200)
[npm] run start
```
```bash
# Ejecutar tests
[npm] run test
```
```bash
# Ejecutar tests en watch mode
[npm] run test:watch
```
```bash
# Ejecutar tests con coverage
[npm] run test:coverage
```
```bash
# Build de producción
[npm] run build
```

## 🐳 Usar con Docker

```bash
# Build de imágenes
docker-compose build
```
```bash
# Levantar la app (Angular DevServer)
docker-compose up -d web
```
```bash
# Run tests
docker-compose --profile test run --rm test
```
```bash
# Run tests con Coverage por consola
docker compose --profile test run --rm test [npm] run test:coverage
```
```bash
# Cleanup de volumenes y contenedores
docker-compose down --volumes --remove-orphans
```