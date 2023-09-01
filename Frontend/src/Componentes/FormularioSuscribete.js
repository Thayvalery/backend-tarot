import React from 'react'

export const FormularioSuscribete= () =>  {
    return (
        <div>
      <form action=''>
<h1>Suscribete</h1>
<input
type='text'
placeholder='Ingrese su Nombre'
/>
<input
type='text'
placeholder='Ingrese su Apellido'
/>
<input
type='email'
placeholder='Ingrese su Email'
/>
<button type='submit'>Enviar</button>

      </form>
        </div>
    )
}


export default FormularioSuscribete
