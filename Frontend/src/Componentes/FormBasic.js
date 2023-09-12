import React from 'react'
import { useForm } from 'react-hook-form'

export const FormBasic = () => {
  const { register, handleSubmit } = useForm() 
  const customSubmit = (data) => {
      console.log(data)
  }
  return (
    <>
    <div className='contenedor-formu'>
        <h2>Form Basic</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control'>
                <label>Apellido</label>
                <input type="text" {...register('apellido')} />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type="text" {...register('email')} />
            </div>
            <button type='submit'>Enviar</button>
        </form>
        </div>
    </>
  )
}

export default FormBasic