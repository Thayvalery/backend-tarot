import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm() 
  const customSubmit = (data) => {
      //console.log(data)
      alert("¡Validación exitosa!")
  }

  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (
    <>
        <h2>Form Validation</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name',{ required:true,})} />
                {errors.name  && <small className='fail'>El campo no puede estar vacío</small>}
            </div>
            <div className='form-control'>
                <label>Apellido</label>
                <input type="text" {...register('apellido', {required:true,})} />
                {errors.apellido && <small className='fail'>El campo no puede estar vacío</small>}
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type="text" {...register('email', {required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.email && <small className='fail'>{errors.country.message}</small>}
            </div>
             <div className='form-control'>
                 <input {...register('prueba')} style={{ backgroundColor:colorInput }} />
             </div>   
            <button type='submit'>Send</button>
        </form>
    </>
  )
}

export default FormValidation