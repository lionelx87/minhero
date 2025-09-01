# MinHero 🦸‍♂️

Aplicación realizada en Angular v19.2.15 (última LTS hasta la fecha) con **Bun** como package manager.  
Este README documenta cómo levantar el proyecto en local y mediante **Docker** para desarrollo y pruebas.

---

## 🚀 Requisitos previos

- [Node.js 22.14.0](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Scripts disponibles

Definidos en el `package.json`:

- `bun run start` → Levanta Angular DevServer (`ng serve`)
- `bun run build` → Genera build de producción
- `bun run watch` → Build en modo watch
- `bun run test` → Ejecuta tests con Jest
- `bun run test:watch` → Ejecuta tests en modo watch
- `bun run test:coverage` → Genera reporte de cobertura

---

## ▶️ Levantar el proyecto (local)

```bash
# Instalar dependencias
bun install
```
```bash
# Levantar en modo dev (http://localhost:4200)
bun run start
```
```bash
# Ejecutar tests
bun run test
```
```bash
# Ejecutar tests en watch mode
bun run test:watch
```
```bash
# Ejecutar tests con coverage
bun run test:coverage
```
```bash
# Build de producción
bun run build
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
docker compose --profile test run --rm test bun run test:coverage
```
```bash
# Cleanup de volumenes y contenedores
docker-compose down --volumes --remove-orphans
```