import React from 'react'

import Header from '../../Componentes/Header'

function Cocina() {
    return (
        <div className='cocina'>

            <Header mytext="COCINA" />

            <div className='pedidos'>
                <p>MESA 4 /Salón  <span>14:15 </span></p>
                <p>Orden #   <span>50</span>  </p>
                <p>Camarero:  <span>Luisa Hernandez</span></p>
                <input value={"Pollo"}></input>

                <br />
                <textarea value={"Descripción"}></textarea>
                <br />
                <button className='boton-cocina'>Terminar</button>
                <br/>
                <br/>
            </div>
          


            <div className='pedidos'>
                <p>MESA 2/Salón  <span>14:15 </span></p>
                <p>Orden #       <span>5</span>  </p>
                <p>Camarero:     <span>Luisa Hernandez</span></p>
                <input value={"Pollo"}></input>

                <br />
                <textarea value={"Descripción"}></textarea>
                <br />
                <button className='boton-cocina'>Iniciar</button>

                <br/>
                <br/>
            </div>



        </div>
    )
}

export default Cocina