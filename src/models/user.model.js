import mongoose from "mongoose";

// esquema es la estructura que tendra el documento dentro de la coleccion
const userSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  apellido: { type: String, require: true },
  edad: { type: Number, require: true },
  dni: { type: String, require: true, unique: true }, // unique hace que este valor sea unico en la coleccion
  curso: { type: String, require: true },
  nota: { type: Number, require: true },
});

// primer atributo nombre del schema, segundo la estructura que tendra y tercero opcional sera el nombre de la coleccion, sino se especifica tomara el nombre del primer atributo
export const UserModel = mongoose.model("estudiantes", userSchema, "Saiyan");
