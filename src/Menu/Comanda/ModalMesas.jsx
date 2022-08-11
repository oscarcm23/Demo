import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react';
import Comanda from './Comanda';




 function ModalMesas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal'>
      <Button variant="primary" className="comanda" onClick={handleShow}>
      <Icon icon="ic:outline-table-restaurant" width={"100px"}/> Mesa 1
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><h2></h2></Modal.Title>
        </Modal.Header>
     

     <div className='checar-comanda'>

        <Comanda/>

     </div>

{/*       <div className='agregar-productos'>
        <span>Producto </span>
        <input  placeholder='Ingrese Producto'></input>
      </div>
      <div   className='agregar-productos'>
        <span>Proveedor</span>
        <input placeholder='Ingrese Prooveedor'></input>
      </div>


      <div  className='agregar-productos'>
        <span>Precio   </span>
        <input placeholder='Ingrese Precio'></input>


        <span>Precio Total</span>
        <input  placeholder='Total' ></input>
      </div>



      <div   className='agregar-productos'>
        <span>Cantidad</span>
        <input   placeholder='Ingrese Cantidad'></input>

        <span>Unidad</span>
        <select id="area" name="">
                    <option value={0}>--Seleccione Unidad</option>
                    <option value={1}>---</option>
                    <option value={2}>----</option>
                </select>
    
      </div>


      <div    className='agregar-productos'>
        <span>Categoria</span>
        <select id="area" name="">
                    <option value={0}>--Seleccione Categoria</option>
                    <option value={1}>---</option>
                    <option value={2}>----</option>
                </select>
        <span>Área</span>
        <select id="area" name="">
                    <option value={0}>--Seleccione Área</option>
                    <option value={1}>---</option>
                    <option value={2}>----</option>
                </select>
      </div>
         */}
        
    {/*     
        <Modal.Footer>
       
          <Button  className='agregar' onClick={handleClose}>
               Enviar
          </Button>


          <Button className='agregar' onClick={handleClose}>
            Cerrar
          </Button>

          
        </Modal.Footer> */}

        
      </Modal>
    </div>
  );
}

export default ModalMesas

