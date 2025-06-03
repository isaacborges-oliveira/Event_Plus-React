import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/comentario.png";
import "./EventLista.css";
import Toggle from "../../components/toggle/Toggle";
import Descricao from "../../assets/img/Descricaoo.png";
import api from "../../Services/services";
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

    return (
        <>
            <Header />
            <section className="container_Event">
                <h1 className="titulo_Event">EVENTOS</h1>
                <hr className="Linha_Evnet" />

                <div className="filtro_Event">
                    <select>
                        <option value="" disabled selected>Todos os eventos</option>
                        <option value="acao">Ação</option>
                        <option value="aventura">Aventura</option>
                        <option value="drama">Drama</option>
                        <option value="comedia">Comédia</option>
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
                                    <td>{evento.tituloTipoEvento }</td>
                                    <td>
                                        <img
                                            src={Descricao}
                                            alt="Descrição"
                                            className="icon_Event"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => alert(evento.descricao)}
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={Comentario}
                                            alt="comentário"
                                            className="icon_Event"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => alert("Abrir comentários")}
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
