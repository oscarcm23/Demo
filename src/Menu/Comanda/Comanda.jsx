import React from 'react'
import { useState } from 'react';
import Header from '../../Componentes/Header';
import { Table} from 'react-super-responsive-table';
import Entradas from './Entradas';
import Pedido from './Pedido';
import { Icon } from '@iconify/react';


var color = "desactivado";
var color2 = "desactivado";
var color3 = "desactivado";
var color4 = "desactivado";
var color5 = "desactivado";
var color6 = "desactivado";





function Comanda() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
  
  
    function checarColor (){
      if(show  ===true){
          color ="activado"
              }else{
                  color ="desactivado"
              }                
    }
  
  
    function checarColor2 (){
      if(show2  ===true){
          color2 ="activado"
              }else{
                  color2 ="desactivado"
              }    
    }
  
  
    function checarColor2 (){
      if(show2  ===true){
          color2 ="activado"
              }else{
                  color2 ="desactivado"
              }    
    }
  
  
    function checarColor3 (){
      if(show3 ===true){
          color3 ="activado"
              }else{
                  color3 ="desactivado"
              }    
    }
  
    function checarColor4 (){
      if(show4  ===true){
          color4 ="activado"
              }else{
                  color4 ="false"
              }    
    }
  
    function checarColor5 (){
      if(show5  ===true){
          color5 ="activado"
              }else{
                  color5 ="desactivado"
              }    
    }
  
  
  
  
  return (
    <div   className='comanda'>
        <Header  mytext="COMANDA"/>

        <div  className='salir'>
      <a  href='/comanda'type='button' className="boton-prueba  salir" ><Icon icon="mdi:exit-to-app" color={"black"} width={"30px"}/> </a>
      </div>




        <div  className='menu-comanda'>

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
                className="custom-btn btn"
                type="button"
                onClick={() => {
                  setShow(!show);
                  setShow2(true); 
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >
Entradas
                {" "}
              {/*   {show ?<Icon icon="gis:globe-users"  width={"20px"}  color={"gray"}  />: <Icon icon="gis:globe-users" width={"20px"}   color={"green"} />   } */}{" "}


 
              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="box">
<Entradas/>
<Pedido/>

                </div>

                

                
              )}
            </td>



            <td  className={color2} onChange={checarColor2 ()}>
              <button
                className="custom-btn btn"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                  setShow(true);
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Plato Fuerte
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
                className="custom-btn btn"
                type="button"
                onClick={() => {
                  setShow3(!show3);
                  setShow(true);
                  setShow2(true); 
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Bebidas
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

export default Comanda