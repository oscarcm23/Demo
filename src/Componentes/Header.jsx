import React from 'react'
import { Icon } from '@iconify/react';

function Header(props) {
    return (
        <div className='header'>

          <div  className='regresar'>
               <p> <Icon icon="akar-icons:arrow-back-thick-fill" color='black'  width={"30px"}/></p>
            </div>

            <div  className='logo'>
               <p> <Icon icon="icon-park-outline:chef-hat" color='black'  width={"30px"}/></p>
            </div>



            <div className="titulo">
                <span className=""></span>
                <h1 > {props.mytext}<span></span></h1>
            </div>
        </div>
    )
}

export default Header