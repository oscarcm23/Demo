
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MenuMesas from "./Menu/MenuMesas";
import Comanda from "./Menu/Comanda/Comanda";
import Pagos from "./Menu/Comanda/Pagos";
import Cocina from "./Menu/Comanda/Cocina";
import Reservaciones from "./Menu/Comanda/Reservaciones";
import MenuOpciones from "./Menu/MenuOpciones";
import PublicRoutes from "./Login/PublicRoutes";
import Administrador from "./Login/Administrador";
function App() {
  return (
    <div className="App">
        <Router>

{/*========================== Páginas Públicas==========================*/}
{/* <PublicRoutes path="/" component={Login} />
<PublicRoutes path="/" component={Footer} />
<PublicRoutes path="/" component={Header} />
 */}



<PublicRoutes exact path="/" component={Login} />
<PublicRoutes exact path="/menu" component={Menu} />
<PublicRoutes exact path="/comanda" component={MenuMesas} />







{/* 
<Administrador exact path="/" component={Menu} />

 */}



</Router>



    </div>
  );
}

export default App;
