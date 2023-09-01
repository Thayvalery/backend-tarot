import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className="logo">
          <img className=""
            src={require("../img/logo-hechizada.jpg")}
            alt="logo-h" width='150px' />
        </div>
      </Link>
      <ul>
        <li>
        <Link to='/'>INICIO</Link>
        </li>
        <li>
          <Link to='/productos'>SERVICIOS</Link>
        </li>
        <li>
          <Link to='/formulario'>SUSCRIBETE</Link>
        </li>
      </ul>
      <div className='cart'>
<box-icon name= 'cart'></box-icon>
<span className='item-total'>0</span>
      </div>

    </header>
  )
}


export default Header
