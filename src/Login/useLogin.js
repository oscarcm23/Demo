import React from 'react'
let valida = true;
function useLogin() {




    const enviarDatos = (event) => {
        if (valida === true) {
      
        } else {
          event.preventDefault();
          //guardado de datos
        }
      };



  return (
    <div>useLogin</div>
  )
}

export default useLogin