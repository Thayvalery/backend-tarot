import React from 'react'


export const Productos = () => {


  return (
    <>
    <h1 className='title'></h1>
      <div className='productos'>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/lect-compl.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Lectura Completa</h1><br/> <br/> 
            <p>Consiste en hacer las preguntas que desees en un tiempo pautado.
              La lectura incluye distintas tiradas </p><br/> 
            <p className='price'>$3000</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/tarotcito-par.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Tarotcito Party</h1><br/> 
            <p>Consiste en adquirir el servicio de Tarot entre un grupo de amigos
              y usarla en conjunto o como herramienta de autoconocimiento.
            </p><br/> 
            <p className='price'>$7000</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/lect-vincular.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Lectura Vincular</h1><br/> 
            <p>La Lectura Vincular tiene por objetivo brindarte respuestas sobre un vínculo especifico:
              pareja, ex pareja, amistad, vínculo laboral. </p><br/> 
            <p className='price'>$3200</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
      </div>
      <div className='productos'>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/preg-magica.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Pregunta Magica</h1><br/> <br/> <br/> 
            <p>Consiste en realizar una sola pregunta para despejar
              una duda o si estas en apuros.
            </p><br/> <br/> <br/> 
            <p className='price'>$2000</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/curso.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Curso Integral de Tarot</h1><br/> <br/> 
            <p>Ya sea que esté explorando el Tarot por primera vez o buscando perfeccionar sus habilidades, 
              hemos creado cuidadosamente cursos que se adaptan a todos los niveles de experiencia.</p><br/> <br/> 
            <p className='price'>$7000</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto__img'>
            <img className=""
            src={require("../img/limpieza.jpeg")}
            alt="portada" width='150px'/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1>Limpieza de Personas con Péndulo</h1><br/> 
            <p>En la limpieza se realiza también un testeo y alineación de los chakras, que son nuestros principales centros energéticos y 
              luego se envía energía a las áreas que el péndulo considere que haya que ayudar. </p><br/> 
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
          <button className='btn'>Añadir al Carrito</button>
            <div>
              <a href='#' className='btn'> Vista</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productos;
