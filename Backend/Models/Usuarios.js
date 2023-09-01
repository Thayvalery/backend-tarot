
const { Schema, model } = require("mongoose");

const UsuariosSchema = new Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  apellido: {
    type: String,
    require:  [true, "El apellido es obligatorio"],
  },
  email: {
    type: String,
    require:  [true, "El email es obligatorio"],
  },
  
});

const Usuarios = model('Usuarios',UsuariosSchema);

module.exports = Usuarios;