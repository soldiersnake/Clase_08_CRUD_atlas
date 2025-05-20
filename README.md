# 🧪 Proyecto - Clase 08: Backend con Node.js y MongoDB usando Mongoose

Este proyecto es una práctica de conexión y manejo de base de datos MongoDB usando Mongoose desde una aplicación Node.js con Express.

---

## ✅ Requisitos

- Node.js instalado
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
- Crear un cluster, base de datos y obtener la URI de conexión

---

## 📦 Instalación

1. Cloná este proyecto o descargá el `.zip`
2. Instalá las dependencias:

```bash
npm install
```

3. Renombrá el archivo `.env` (ya incluido) y colocá tu conexión de Atlas:

```
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/colegio
```

---

## 🚀 Cómo iniciar el proyecto

```bash
npm start
```

El servidor se ejecutará en:

```
http://localhost:8080
```

---

## 🛠️ Rutas disponibles

### Estudiantes (Colección: `estudiantes`)

- `GET /api/users` → Obtener todos los estudiantes
- `GET /api/users/:id` → Obtener un estudiante por ID
- `POST /api/users` → Crear un nuevo estudiante
- `PUT /api/users/:id` → Actualizar un estudiante por ID
- `DELETE /api/users/:id` → Eliminar un estudiante por ID

---

## 📁 Estructura del proyecto

```
src/
├── app.js
├── models/
│   └── user.model.js
├── routes/
│   └── users.router.js
.env
package.json
```

---

## 📚 Tecnologías usadas

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- dotenv

---

¡Listo para practicar conexión real con Mongo y aplicar CRUD con Mongoose!
