import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.router.js";

// llamado a la configuracion de variable de entorno
dotenv.config();

const app = express();
app.use(express.json()); // aclaramos en la app que utilizaremos JSON

// guardamos en variable la variable de entorno (.ENV)
const URL_MONGO = process.env.MONGO_URI;

// configuracion a conexion a base de datos en Mongo Atlas
mongoose
  .connect(URL_MONGO, {
    dbName: "Coders_app", // nombre de la base de datos, si no se especifica por defecto sera 'test'
  })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log("Error al conectarse a la BD", err));

// llamada a la ruta de user
app.use("/api/users", userRouter);

// escucha del servidor
app.listen(8080, () => console.log("Servidor corriendo en puerto: 8080"));
