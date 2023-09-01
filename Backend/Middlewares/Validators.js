const Usuarios = require("../Models/Usuarios");
const {validationResult} = require('express-validator');


const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  next();
};


//Este es un validador custom para verificar que exista un usuario en la DB con el id recibido
const validateID = async (id) => {
  const usuarios = await Usuarios.findById(id);

  if (!usuarios) {
    throw new Error("No existe un usuario con ese ID");
  }
};

module.exports = {validateID, validarCampos};