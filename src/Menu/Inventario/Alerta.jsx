
import swal from "sweetalert";

   export  const mostrarAlerta=()=>{
        swal({
            title: "Esta a punto de acabarse x Producto",
            text:"Quedan 5 kilos ",
            icon:"warning",
            buttons:["Contactar Proveedor","Recordar Después"]
        }).then(respuesta=>{
            if(respuesta === "AGREGAR"){
                swal({
                    title: "Llamar",
                    text:"",
                    icon:"success"
                })
            }else{
                swal({
                    title: "Se recordará despues",
                    text:"",
                    icon:"success"
                })
            }
        })
    
    }
