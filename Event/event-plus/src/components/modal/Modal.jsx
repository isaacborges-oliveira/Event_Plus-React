import React from 'react'
import ImgDeletar from "../../assets/img/Excluir.png"
import "./Modal.css"
import { useState, useEffect } from "react";
import api from "../../Services/services";

const Modal = (props) => {

    const[comentarios,setComentarios] = useState([]);
    const[novocomentarios,setNovoComentarios] = useState("");
 const [usuarioId, setUsuarioId] = useState("67299B4B-D582-4127-A3B9-EB8902386071")
    async function listarComentarios() {
        try {
           const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);
           setComentarios(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

     async function cadastrarComentario (comentario) {
       try {
        await api.post("ComentariosEventos", {idUsuario: usuarioId , idEvento: props.idEvento, Descricao: } )
       } catch (error) {
        
       } 
    }
    async function deletarComentario() {
        try {
            await api.delete(`ComentariosEventos/${idComentario}`);
        } catch (error) {
            
        }

    }


   










     useEffect(() => {
        listarComentarios();
    }, [])




    return (
        <>

            <div className="model-overlay" onClick={props.fecharModal}> </div>
            <div className='model'>

                <h1>{props.titulo}</h1>
                <div className='model_conteudo'>
                    {props.tipoModal === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (

                        <>

                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                <strong>{item.usuario.nomeUsuario}
                                </strong>
                                <img src={ImgDeletar}
                                alt="deletar"/>
                                onClick= {() deletarComentario(item.idComentarioEvento)}
                                <p>{item.descricao}</p>
                                <hr />

                                </div>
                            ))}

                            <div>
                                <input type="text"
                                placeholder='Escreva seu comentario ...'
                                />
                                value={novocomentarios}
                                onChange={(e) => setNovoComentarios(e.terget.value)}
                                <button onClick={() => cadastrarComentario(novocomentarios)}>
                                    Cadastrar
                                </button>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default Modal