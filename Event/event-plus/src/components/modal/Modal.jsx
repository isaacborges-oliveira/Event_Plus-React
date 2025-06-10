import React from 'react'
import ImgDeletar from "../../assets/img/Excluir.png"
import "./Modal.css"
import { useState, useEffect } from "react";
import api from "../../Services/services";

const Modal = (props) => {

    const [comentarios, setComentarios] = useState([])
    const [usuarioId, setUsuarioId] = useState("B2381F43-9D74-400D-B3ED-FD05D20E9885")
    const [novoComentario, setNovoComentario] = useState("")


    async function listarComentarios() {
        try {
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);
            setComentarios(resposta.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        listarComentarios()
    }, [comentarios])

    async function cadastrarComentario(comentario) {
        try {
            await api.post("ComentariosEventos", {
                idUsuario: usuarioId,
                idEvento: props.idEvento,
                descricao: comentario
            })
        } catch (error) {
            console.log(error);

        }
    }

    async function deletarComentario(idComentario) {
        try {
            await api.delete(`ComentariosEventos/${idComentario}`)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <div className="model-overlay" onClick={props.fecharModal}>
                <div className="model" onClick={(e) => e.stopPropagation()}>
                    <h1>{props.titulo}</h1>
                    <div className="model_conteudo">
                        {props.tipoModel === "descricaoEvento" ? (
                            <p>{props.descricao}</p>
                        ) : (
                            <>
                                {comentarios.map((item) => (
                                    <div key={item.idComentarioEvento}>
                                        <strong>{item.usuario.nomeUsuario}</strong>
                                        <img src={ImgDeletar} alt="deletar"
                                            onClick={() => deletarComentario(item.idComentarioEvento)} />
                                        <p>{item.descricao}</p>
                                        <hr />
                                    </div>
                                ))}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Escreva seu comentario..."
                                        value={novoComentario}
                                        onChange={(e) => setNovoComentario(e.target.value)}
                                    />

                                    <button className='botao' onClick={() => cadastrarComentario(novoComentario)}>
                                        Cadastrar
                                    </button>
                                    
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal;