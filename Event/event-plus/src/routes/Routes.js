import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/tipoevento/TipoEvento";
import Usuario from "../pages/usuario/Usuario";
import CadastroEvento from "../pages/cadastroevento/Cadastro";
import EventLista from "../pages/eventlista/EventLista";
import TelaHome from "../pages/home/Home"
import Eventos from "../pages/eventos/Eventos"
import { useAuth } from "../contexts/AuthContext";

const Privado = (props) => {
    const {usuario} = useAuth();


 if(!usuario){
    return<Navigate to="/"/>;

 }
 if(usuario.tipoUsuario !== props.tipoPermitido){
    return <Navigate to="/" />;
 }

 return <props.Item />;


};

const Rotas = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/ => Login */}
                <Route path="/" element={<Login />} exact />
                
                <Route path="/tipoevento" element= {<Privado tipoPermitido="Adimin" Item={TipoEvento}/> }exact />
                <Route path="/usuario" element={ <Privado tipoPermitido="Adimin" Item={Usuario}/>} exact />
                <Route path="/cadastroEvento" element={<Privado tipoPermitido="Adimin" Item={CadastroEvento}/>} exact />
                <Route path="/ListagemEventos" element={<Privado tipoPermitido="Aluno" Item={EventLista}/>} exact />
                <Route path="/tipoevento" element={<Privado tipoPermitido="Adimin" Item={TipoEvento}/>} exact />
                <Route path="/home" element={< TelaHome/>} exact />



            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;