import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.router.js";

dotenv.config();

const app = express();
app.use(express.json()); // aclaramos en la app que utilizaremos JSON

const URL_MONGO = process.env.MONGO_URI;

mongoose
  .connect(URL_MONGO, { dbName: "Coders_app" })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log("Error al conectarse a la BD", err));

app.use("/api/users", userRouter);

app.listen(8080, () => console.log("Servidor corriendo en puerto: 8080"));
