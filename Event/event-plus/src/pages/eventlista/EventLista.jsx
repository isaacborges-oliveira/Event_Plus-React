import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/comentario.png";
import "./EventLista.css";
import Toggle from "../../components/toggle/Toggle";
import Descricao from "../../assets/img/informacoes 1.png";

const EventLista = () => {
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
                            
                                <tr  className="linha_Evento espaço">
                                    <td>Evento de castração de cachorro ao vivo	</td>
                                    <td>22/05/2026</td>
                                    <td> Campeonato</td>
                                    <td style={{ backgroundImage: `url(${Descricao})` }}>
                                          
                                    </td>
                                    <td>
                                        <img src={Comentario} alt="comentário" className="icon_Event" />
                                    </td>
                                    <td>
                                        <Toggle />
                                    </td>
                                </tr>
                          
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EventLista;
