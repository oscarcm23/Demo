import React from 'react'
import { mostrarAlerta } from './Alerta'
import Header from '../../Componentes/Header'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import  Example from './AgregarProductos';


function Productos() {

    
const products = [{
    id:1,
    producto:"Leche",
    categoria:"Lácteos",
    proveedor:"Liconsa",
    inventario:3,
    unidad:"Litros",
    area:"Cocina"
},{
    id:2,
    producto:"Tequila",
    categoria:"Licorería",
    proveedor:"Don Julio",
    inventario:9,
    unidad:"Botellas",
    area:"Cocina"
},{
    id:3,
    producto:"Queso",
    categoria:"Lácteos",
    proveedor:"Liconsa",
    inventario:3,
    unidad:"Kg",
    area:"Cocina"
}




];
const columns = [{
  dataField: 'id',
  text: 'ID',
  filter: textFilter()
}, {
  dataField: 'producto',
  text: 'Producto',
  filter: textFilter()
}, {
  dataField: 'categoria',
  text: 'Categoria',
  filter: textFilter()
},{
    dataField: 'proveedor',
    text: 'Proveedor',
    filter: textFilter()
  },{
    dataField: 'inventario',
    text: 'Inventario',
    filter: textFilter()
  } ,{
    dataField: 'unidad',
    text: 'Unidad',
    filter: textFilter()
  }  ,{
    dataField: 'area',
    text: 'Área',
    filter: textFilter()
  }
  
  





];

  return (
    <div className='okay'>
        <Header mytext="Inventario" />

     
        <div className='inventario'>

        <h2>Productos</h2>

<div>
    

    <Example/>
    <br/>
    <br/>
</div>
        <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory()  }   /* pagination={ paginationFactory()  }*//>

        </div>



    </div>
  )
}

export default Productos