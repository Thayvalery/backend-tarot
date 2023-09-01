const { Router } = require("express");
const { check } = require("express-validator");



const router = Router();

const {
  obtenerUsuarios,
  agregarUsuarios,
  actualizarUsuarios,
  borrarUsuarios,
} = require("../Controllers/Usuarios");

const { validateID, validarCampos } = require("../Middlewares/Validators");


router.get(
  "/:id",  [
    check("nombre", "El nombre no debe estar vacío").notEmpty(),
    check("apellido", "El apellido no debe estar vacío").notEmpty(),
    check("email", "El email no debe estar vacío").isEmail(),
    validarCampos,
  ],
  obtenerUsuarios
  );

router.post(
  "/",
  [
    check("nombre", "El nombres es obligatorio").notEmpty(),
    check("apellido", "El apellido es obligatorio").notEmpty(),
    check("email", "El correo no es valido").isEmail(),
    validarCampos,
  ],
  agregarUsuarios
);

router.put(
  "/:id",
  [check("id").isMongoId(), 
  check("id").custom(validateID), 
  validarCampos],
  actualizarUsuarios
);

router.delete(
  "/:id",
  [check("id").isMongoId(), 
  check("id").custom(validateID),
   validarCampos],
  borrarUsuarios
);

module.exports = router;// exporto para  que se importe y se pueda utilizar en app.js






