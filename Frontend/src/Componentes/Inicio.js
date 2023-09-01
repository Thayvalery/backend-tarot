import React from 'react'
import { Link } from "react-router-dom";



export const Inicio = () =>  {
    return (
        <div className="inicio">   
            <Link to="/">
            </Link>
            <Link to="/productos">
            <img className=""
            src={require("../img/servicios.jpeg")}
            alt="portada" width='150px'/>
            </Link>
            <Link to="/formulario">
            <img className=""
            src={require("../img/suscribete.jpeg")}
            alt="portada" width='150px'/>
            </Link>
        </div>
    )
}


export default Inicio;