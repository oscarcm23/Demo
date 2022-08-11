import React from 'react'
import { Icon } from '@iconify/react';
import swal from "sweetalert";
import ModalMesas from './ModalMesas';


function Salon() {


const mostrarAlerta=()=>{
    swal({
        title: "¿COBRAR O AGREGAR?",
        text:"",
        icon:"success",
        buttons:["COBRAR","AGREGAR"]
    }).then(respuesta=>{
        if(respuesta === "AGREGAR"){
        
            swal({
                title: "Cobrar",
                text:"",
                icon:"success"
            })

      
        }else{
            swal({
                title: "Agregar Productos",
                text:"",
                icon:"success"
            })
        }
    })

}






  return (
    <div  className='salon'>



<div className="padre  mesa">
  <div className="hijo  mesa">


<ModalMesas />




 {/*   <p  className='mesa'> 
   <button   className='mesa'   onClick={ mostrarAlerta}>
   Mesa 1
   </button>
   </p> */}

    </div>


  <div className="hijo  mesa">

  <ModalMesas />

  
    </div>

    <div className="hijo   mesa">

    <ModalMesas />

    </div>
</div>



<div className="padre   mesa">
  <div className="hijo    mesa">
  <ModalMesas />

    </div>


  <div className="hijo   mesa">

  <ModalMesas />

    </div>

    <div className="hijo   mesa">

    <ModalMesas />

    </div>
</div>



    </div>
  )
}

export default Salon