import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/comentario.png";
import "./EventLista.css";
import Toggle from "../../components/toggle/Toggle";
import Descricao from "../../assets/img/Descricaoo.png";
import api from "../../Services/services";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";

const EventLista = () => {
    const [eventos, setEventos] = useState([]);


    useEffect(() => {
        listarEventos();
    }, []);

    const listarEventos = async () => {
        try {
            const resposta = await api.get("/Eventos");
            setEventos(resposta.data);
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    };
    const alerta = async () => {

        const ipAPI = "//api.ipify.org?format=json";
        const response = await fetch(ipAPI);
        const data = await response.json();
        const inputValue = data.ip;
        const { value: ipAddress } = await Swal.fire({
            title: "Comente sobre o evento",
            input: "text",

            inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        });
        if (ipAddress) {
            Swal.fire(`Your IP address is ${ipAddress}`);
        }


    }

    return (
        <>
            <Header />
            <section className="container_Event">
                <h1 className="titulo_Event">EVENTOS</h1>
                <hr className="Linha_Evnet" />

                <div className="filtro_Event">
                    <select defaultValue="">
                        <option value="">Todos os eventos</option>
                        {eventos.map((evento) => (
                            <option key={evento.idEvento} value={evento.idEvento}>
                                {evento.nomeEvento}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="tabela_Event">
                    <table>
                        <thead>
                            <tr className="cabecalho_Event">
                                <th>Título</th>
                                <th>Data do evento</th>
                                <th>Tipo Evento</th>
                                <th>Descrição</th>
                                <th>Comentários</th>
                                <th>Participar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map((evento, index) => (
                                <tr key={index} className="linha_Evento espaço">
                                    <td>{evento.nomeEvento}</td>
                                    <td>{new Date(evento.dataEvento).toLocaleDateString()}</td>
                                    <td>{evento.tiposEvento?.tituloTipoEvento}</td>
                                    <td>
                                        <img
                                            src={Descricao}
                                            alt="Descrição"
                                            className="icon_Event"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                Swal.fire({
                                                    title: "Descrição do Evento",
                                                    text: evento.descricao,
                                                    icon: "info",
                                                    confirmButtonText: "Fechar",
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={Comentario}
                                            alt="comentário"
                                            className="icon_Event"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => alerta()}



                                        />
                                    </td>
                                    <td>
                                        <Toggle idEvento={evento.idEvento} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EventLista;
