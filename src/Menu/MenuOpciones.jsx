import React from 'react'
import { Icon } from '@iconify/react';

function MenuOpciones() {
  return (
    <div className='menu'>


    <div class="padre">
      <div class="hijo  ">
    
    
       <p> Empleados</p>
       <Icon icon="ion:restaurant-sharp" width={"100px"}/>
        
        </div>
      <div class="hijo">
      <p>Inventarios</p>  
      <Icon icon="ion:restaurant-sharp" width={"100px"}/>
        
        </div>


        <div class="hijo">
      <p>Diseñar Menú</p>  
      <Icon icon="ion:restaurant-sharp" width={"100px"}/>
        
        </div>
    </div>
    
    
    
    
    <div class="padre">
      <div class="hijo">
       <p>Reservaciones</p>
       <Icon icon="clarity:employee-group-line"  width={"100px"}/>
        </div>
      <div class="hijo">
      <p>Publicidad</p>  
      <Icon icon="ic:baseline-delivery-dining"  width={"100px"} />
        
        </div>

        <div class="hijo">
      <p>Finanzas</p>  
      <Icon icon="ic:baseline-delivery-dining"  width={"100px"} />
        
        </div>
    </div>
    
    
    
    
        </div>
  )
}

export default MenuOpciones