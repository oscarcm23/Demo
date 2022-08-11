import React from 'react'
import { useState } from 'react';
import Header from '../../Componentes/Header'
import { Table} from 'react-super-responsive-table';
import { Icon } from '@iconify/react';


var color = "pagos";
var color2 = "pagos";
var color3 = "pagos";



function Pagos() {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
  

    function checarColor (){
        if(show  ===true){
            color ="pagos-activos"
                }else{
                    color ="pagos-desactivos"
                }                
      }
    
    
      function checarColor2 (){
        if(show2  ===true){
            color2 ="pagos-activos"
                }else{
                    color2 ="pagos-desactivos"
                }    
      }
    
    
      function checarColor2 (){
        if(show2  ===true){
            color2 ="pagos-activos"
                }else{
                    color2 ="pagos-desactivos"
                }    
      }
    
    
      function checarColor3 (){
        if(show3 ===true){
            color3 ="pagos-activos"
                }else{
                    color3 ="pagos-desactivos"
                }    
      }
  return (
    <div className='pagos'>


        <Header mytext="PAGOS" />




        <div className='resumen-pagos'>

        <h2>Resumen  de pago</h2>

        <p>Forma de Pago:
            <span className='forma-pago'>Efectivo</span>
            </p>


            <p>Total Recibido:
            <span className='forma-pago'>$50,000</span>
            </p>

            <p>Total a Pagar:
            <span    className='pagar'>$ 48,000</span>
            </p>
          

        


<span>---------------------------------------------</span>


            <p>Cambio:
            <span className='cambio'>$ 2,000</span>
            </p>

        </div>
    


    <div className='metodos-pago'>




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
                className="pagar"
                type="button"
                onClick={() => {
                  setShow(!show);
                  setShow2(true); 
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >
Efectivo
                {" "}
     {show ?<Icon icon="fluent:money-hand-24-filled"  width={"20px"}  color={"gray"}  />: <Icon icon="fluent:money-hand-24-filled" width={"20px"}   color={"green"} />   } {" "}


 
              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="salon">

                </div>
              )}
            </td>



            <td  className={color2} onChange={checarColor2 ()}>
              <button
                className="pagar"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                  setShow(true);
                  setShow3(true);    
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Tarjeta de Crédito
                {" "}
           {show2 ? <Icon icon="fa6-regular:credit-card" width={"20px"}  color={"gray"} /> : <Icon icon="fa6-regular:credit-card" width={"20px"} color={"green"}   /> } {" "} 
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
                className="pagar"
                type="button"
                onClick={() => {
                  setShow3(!show3);
                  setShow(true);
                  setShow2(true); 
                  setShow4(true);    
                  setShow5(true);                    
                
                }}
              >

Tarjeta de Debito
                {" "}
              {show3 ? <Icon icon="fa6-regular:credit-card" width={"20px"}  color={"gray"} /> : <Icon icon="fa6-regular:credit-card" width={"20px"}  color={"green"}  /> }{" "} 
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

<div className='numeros'>

<span  className='numeros'>1</span>
<span className='numeros'>2</span>
<span className='numeros'>3</span>
<span  className='numeros'>4</span>
<span className='numeros'>5</span>
<span className='numeros'>6</span>

<span  className='numeros'>7</span>
<span className='numeros'>8</span>
<span className='numeros'>9</span>


<span  className='numeros'>0</span>
<span className='numeros'>AC</span>
<span className='numeros'>--</span>


</div>




</div>



    </div>
  )
}

export default Pagos