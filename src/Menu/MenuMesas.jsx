
import React from 'react'
import { useState } from 'react';
import { Table} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Icon } from '@iconify/react';

import Salon from "./Comanda/Salon";



var color = "false";
var color2 = "false";
var color3 = "false";
var color4 = "false";
var color5 = "false";



function  MenuMesas() {
      /*========================== Mostrar/Ocultar =========================*/
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);


  function checarColor (){
    if(show  ===true){
        color ="true"
            }else{
                color ="false"
            }                
  }


  function checarColor2 (){
    if(show2  ===true){
        color2 ="true"
            }else{
                color2 ="false"
            }    
  }


  function checarColor2 (){
    if(show2  ===true){
        color2 ="true"
            }else{
                color2 ="false"
            }    
  }


  function checarColor3 (){
    if(show3 ===true){
        color3 ="true"
            }else{
                color3 ="false"
            }    
  }

  function checarColor4 (){
    if(show4  ===true){
        color4 ="true"
            }else{
                color4 ="false"
            }    
  }

  function checarColor5 (){
    if(show5  ===true){
        color5 ="true"
            }else{
                color5 ="false"
            }    
  }





  return (

    <div className='tabla-menu' >


<div  className='salir'>
      <a  href='/'type='button' className="boton-prueba  salir" ><Icon icon="mdi:exit-to-app" color={"black"} width={"30px"}/> </a>
      </div>


   {/*    <div  className='titulo'>
      <h2>Administración</h2>
      </div> 
 */}
        <div  >

    <Table >
      {/*========================== Titulos Tabla ==========================*/}
      <thead>
        <tr >
          <th  className='ocultar' > </th>
          <th className='ocultar'></th>
          <th  className='ocultar' ></th>
   
        
        </tr>
      </thead>
      <tbody>
        <tr >

        <td id="funcion"   className={color} onChange={checarColor ()}>
              <button
                className="icon"
                type="button"
                onClick={() => {
                  setShow(!show);
                  setShow2(true); 
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >
Sálon
                {" "}
              {/*   {show ?<Icon icon="gis:globe-users"  width={"20px"}  color={"gray"}  />: <Icon icon="gis:globe-users" width={"20px"}   color={"green"} />   } */}{" "}


 
              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="salon">
<Salon />
                </div>
              )}
            </td>



            <td  className={color2} onChange={checarColor2 ()}>
              <button
                className="icon"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                  setShow(true);
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Terreza
                {" "}
         {/*        {show2 ? <Icon icon="raphael:users" width={"20px"}  color={"gray"} /> : <Icon icon="raphael:users" width={"20px"} color={"green"}   /> } {" "} */}
              </button>
              {show2 ? (
                <div></div>
              ) : (
                <div className="personal ">
        
                  {/*========================== Llamado al Componente ==========================*/}
                       
                </div>
              )}
            </td>



            
            <td  className={color3} onChange={checarColor3 ()}>
              <button
                className="icon"
                type="button"
                onClick={() => {
                  setShow3(!show3);
                  setShow(true);
                  setShow2(true); 
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Barra
                {" "}
            {/*     {show3 ? <Icon icon="fluent:contact-card-16-filled" width={"20px"}  color={"gray"} /> : <Icon icon="fluent:contact-card-16-filled" width={"20px"}  color={"green"}  /> }{" "} */}
              </button>
              {show3 ? (
                <div></div>
              ) : (
                <div className="personal">
  
                  {/*========================== Llamado al Componente ==========================*/}
                       

                </div>
              )}
            </td>






    
        </tr>
      </tbody>
    </Table>


    </div>
  </div>
  )
}

export default MenuMesas