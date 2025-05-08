import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/comentario.png";
import SelectOn from "../../assets/img/select on.png";
import SelectOFF from "../../assets/img/Select.png";
import "./EventLista.css";

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
                                <th><b>Tipo Evento</b></th>
                                <th><b>Comentários</b></th>
                                <th><b>Participar</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="linha_Evento separa">
                                <td>Nome Evento</td>
                                <td>Tipo Evento</td>
                                <td><img src={Comentario} alt="comentário" className="icon_Event" /></td>
                                <td><img src={SelectOFF} alt="select off" className="icon_Event" /></td>
                            </tr>
                            <tr className="linha_Evento espaço">
                                <td>Nome Evento</td>
                                <td>Tipo Evento</td>
                                <td><img src={Comentario} alt="comentário" className="icon_Event" /></td>
                                <td><img src={SelectOn} alt="select on" className="icon_Event" /></td>
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
