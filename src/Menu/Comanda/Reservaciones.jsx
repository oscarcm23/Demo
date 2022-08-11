import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../../Componentes/Header'

function Reservaciones() {
    const [value, onChange] = useState(new Date());


  return (
    <div className='reservaciones'>

        <Header  mytext =  "RESERVACIONES"/>

        <div className='calendario'>
        <Calendar onChange={onChange} value={value} />
            
        </div>

        <div className='tareas'><div className="centered">
  
<h2>TAREAS</h2>
        </div>
        </div>
 
    </div>
  )
}

export default Reservaciones