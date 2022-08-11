import React from 'react';
import "./login.css";
import Logo from "../media/images/Logo.png";
import useLogin from './useLogin';
import Menu from '../Menu/Menu';
import {validator} from "./ValidaRol"
import  ValidaUsuario  from "./ValidaRol";


let validacion = true;

function Login() {

    function checar(){
      
         validator  = "administrador";
         <ValidaUsuario />

   
    }




    const { handleInputChange, enviarDatos } = useLogin();

    return (
        <div className="contenido-main-registro login">
            <div className="scene flex">
            <div className='caja-login'>
               
                 <div  className='logo'>
                 <img  alt='logo' src={Logo} />
                 </div>
                 
                 <h3 className='titulo'>Jutxe</h3>

           

             </div>

                <section className="card-body">

         


                    <form className="card-form"      >
                        {/* //============Titulo ============ */}
                        <h2> <span >Bienvenido</span></h2>
                        {/* //============ Correo ============ */}

                        {/*          <label htmlFor="user" className=" label">Usuario</label> */}
                        <input id="email"
                            type="email"
                            name="email"
                            className="card-input"

                            placeholder=" Usuario" />

                        {/* //============ Contraseña ============ */}

                        {/*     <label htmlFor="password" className="label">Contraseña</label>    */}
                        <input id="password"
                            type="password"
                            name="password"
                            className="card-input"
                            data-type="password"
                            placeholder="Contraseña" />
                        {/* //============ Botón Entrar ============ */}

                        <div className="boton-login">
                            <br></br>
                          {/*   <button className="btn-login"    onClick={checar} >
                                <span>Ingresar</span>
                            </button> */}

                            <a  href='/menu'type='button' className="boton-prueba" >Entrar</a>
                        </div>
                    </form>
                </section>
            </div>


            <div>
            </div>
        </div>

    )
}

export default Login