const Usuarios = require("../Models/Usuarios");
const enviarCorreo = require("../Api/Mailcontrollers");

const obtenerUsuarios = async (_, res) => {
  const filter = { disponible: true };
  const usuarios = await Usuarios.find(filter);

  res.status(200).json({
    msg: "Esta es una lista de usuarios",
    usuarios,
  });
};


/*Post*/
const agregarUsuarios = async (req, res) => {
  try{
  const { email, nombre, apellido } = req.body;

  const newUsuarios = new Usuarios({ email, nombre, apellido});
  await newUsuarios.save();
  await enviarCorreo( email, nombre, apellido);

  res.status(200).json({msg: "Usuario agregado con éxito a la DB y envio de correo exitoso" });
}catch(error){
  console.error("Error al registrar Usuario", error);
  res.status(500).json({error:"Hubo un error al registrar Usuario"})
}
};

const actualizarUsuarios = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;

  const usuarios = await Usuarios.findByIdAndUpdate(id, {
    $set: {
      nombre: nombre,
      apellido: apellido,
      email: email,
    },
  });

  res.status(200).json({
    msg: "Usuario actualizado con éxito",
    Usuarios,
  });
};

const borrarUsuarios = async (req, res) => {
  const { id } = req.params;
  //Borrado lógico : await Product.findByIdAndUpdate(id,{disponible: false})

  //Borrado físico:
  await Usuarios.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Usuario borrado con éxito",
  });
};

module.exports = { obtenerUsuarios, agregarUsuarios, actualizarUsuarios, borrarUsuarios };