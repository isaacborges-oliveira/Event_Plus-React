import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/tipoevento/TipoEvento";
import Usuario from "../pages/usuario/Usuario";
import CadastroEvento from "../pages/cadastroevento/Cadastro";
import EventLista from "../pages/eventlista/EventLista";
import TelaHome from "../pages/home/Home"
import Eventos from "../pages/eventos/Eventos"
const Rotas = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/ => Login */}
                <Route path="/" element={<Login />} exact />
                
                <Route path="/tipoevento" element={<TipoEvento />} exact />
                <Route path="/usuario" element={<Usuario />} exact />
                <Route path="/cadastroEvento" element={<CadastroEvento />} exact />
                <Route path="/eventlista" element={< EventLista />} exact />
                <Route path="/tipoevento" element={< TipoEvento />} exact />
                <Route path="/home" element={< TelaHome/>} exact />
                <Route path="/eventos" element={< Eventos/>} exact />


            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;