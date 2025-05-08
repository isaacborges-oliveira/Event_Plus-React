import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/tipoevento/TipoEvento";
import Usuario from "../pages/usuario/Usuario";
import CadastroEvento from "../pages/cadastroevento/Cadastro";
import EventLista from "../pages/eventlista/EventLista";

const Rotas = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/ => Login */}
                <Route path="/" element={<Login />} exact />
                
                <Route path="/tipoevento" element={<TipoEvento />} exact />
                <Route path="/Usuario" element={<Usuario />} exact />
                <Route path="/CadastroEvento" element={<CadastroEvento />} exact />
                <Route path="/eventlista" element={< EventLista />} exact />


            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;