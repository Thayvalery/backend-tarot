
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Paper, TextField, Button, IconButton } from '@mui/material';
import { Email, Person, Close } from '@mui/icons-material';



axios.defaults.validateStatus = function (status) {
  return true; // Incluso se manejarán los códigos de estado no válidos
};

export const FormuModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSubscribe = async () => {
    try {
      const trimmedEmail = email.trim();
      const response = await axios.post('https://backend-tarot.vercel.app/', {
        email: trimmedEmail,
        nombre,
        apellido,

      });

      if (response.status === 200) {
        console.log('Registro exitoso');
        setRegistroExitoso(true);

      } else {
        // Maneja otros códigos de estado aquí si es necesario
        setErrorMessage('Error al suscribirse');
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setErrorMessage('Error al suscribirse: ' + error.message);

    }
  };
  return (
    <Modal open={isOpen} onClose={onClose} className="custom-modal">
      <Paper className="modal-paper">
        <div className="modal-content">
          <div className="image-container">
            <img
              src={require("../img/logo-hechizada.jpg")}
              className="modal-image"
              alt="Imagen" />
          </div>
          <div className="form-container" >
            <div className="close-button-container">
              <IconButton className="close-button" onClick={onClose}>
                <Close />
              </IconButton>
            </div>
            <h2>Gracias por Suscribirte</h2><br/>
            <TextField
              label="Email"
              fullWidth
              InputProps={{ startAdornment: <Email /> }}
              className="input"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Nombre"
              fullWidth
              InputProps={{ startAdornment: <Person /> }}
              className="input"
              placeholder="Ingresa tu nombre "
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <TextField
              label="Apellido"
              fullWidth
              InputProps={{ startAdornment: <Person /> }}
              className="input"
              placeholder="Ingresa tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            {registroExitoso && <p className="success-message">Registro exitoso</p>}
            <div className="button-container">
              <Button
                variant="contained"
                style={{ backgroundColor: '#bbcae7', color: 'black' }}
                onClick={handleSubscribe}
              >
                Suscribirse
              </Button>
              <Button style={{ color: 'black' }}>Actualizar Email</Button>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </Paper>
    </Modal>
  );
};


export default FormuModal;