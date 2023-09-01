
const nodemailer = require("nodemailer");



/*config del servicio de correo*/
const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'thayvalery@gmail.com',
    pass: process.env.CONNECTION_MAIL,
  }
});

/*Definir el contenido del cuerpo del correo*/
const enviarCorreo = async (email, nombre, apellido) => {
  try {
    await transporter.sendMail({
      from: 'thayvalery@gmail.com', // dirección del remitente
      to: email, // lista de receptores
      subject: "Suscripcion ✔", // Línea de asunto
       text: `Hola, <${nombre, apellido}> gracias por suscribirte a Hechizada, te estaremos enviando informacion de nuestros nuevos productos y promociones especiales y exclusivas para suscriptores como Tú`, // cuerpo de texto sin formato
    });
    console.log("Correo enviado con Exito")
  } catch (error) {
    console.error("Error al enviar el correo",(error))
  }
};

module.exports = enviarCorreo;




