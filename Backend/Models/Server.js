const cors = require("cors");
const express = require("express");
const dbConnection = require("../Database/Database");

class Server {
  constructor() {
    this.app = express();
    this.usuariosPath = "/api/usuarios";
    this.port = process.env.PORT || 8080;
    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors({
      origin:['https://backend-tarot-nal8.vercel.app/', 'http://localhost:8080'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
}));

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require("../Routes/Usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;