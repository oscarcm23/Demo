import React from 'react'
import "./menu.css";
import { Icon } from '@iconify/react';

function Menu() {
  return (
    <div className='menu'>

      <div  className='salir'>
      <a  href='/'type='button' className="boton-prueba  salir" ><Icon icon="mdi:exit-to-app" color={"black"} width={"30px"}/> </a>
      </div>


<div class="padre">
  <div class="hijo  ">


   <p> Comanda</p>
   <a  href='/comanda'type='button'  >  <Icon icon="ion:restaurant-sharp" /></a>

    
    </div>
  <div class="hijo">
  <p>Reservaciones</p>  

  <a  href='/reservaciones'type='button'  >   <Icon icon="ion:restaurant-sharp" /></a>


    
    </div>
</div>




<div class="padre">
  <div class="hijo">
   <p>Empleados</p>

   <a  href='/empleados'type='button'  >   <Icon icon="ion:restaurant-sharp" /></a>



    </div>
  <div class="hijo">
  <p>Delivery</p>  
  <a  href='/delivery'type='button'  >   <Icon icon="ion:restaurant-sharp" /></a>


    
    </div>
</div>




    </div>
  )
}

export default Menu