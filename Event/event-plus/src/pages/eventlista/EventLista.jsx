import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Comentario from "../../assets/img/comentario.png"
import Descricao from "../../assets/img/Descricaoo.png"
import Toggle from "../../components/toggle/Toggle";
import Modal from "../../components/modal/Modal"
import "./EventLista.css";
import { useState, useEffect } from "react";
import api from "../../Services/services";
import { format } from "date-fns";
import { clampWithOptions } from "date-fns/fp";
import Swal from "sweetalert2";
const ListaEvento = () => {

    const [listaEventos, setListaEventos] = useState([])
    const [tipoModal, setTipoModal] = useState("") //"descricaoEvento" ou "Comentario"
    const [dadosModal, setDadosModal] = useState([]) //descricao, idEvento, etc.
    const [modalAberto, settModalAberto] = useState([false])
    const [filtro, setFiltro] = useState(["todos"])
    const [usuarioId, setUsuarioId] = useState("67299B4B-D582-4127-A3B9-EB8902386071")

    async function listarEventos() {
        try {
            //pego o eventos em geral
            const resposta = await api.get("eventos");
            const todosOsEventos = resposta.data;
            const respostaPresencas = await api.get("PresencasEventos/ListarMinhas/" + usuarioId)
            const minhasPresencas = respostaPresencas.data;

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento);
                return {
                    ...atualEvento,

                    possuiPresenca: presenca?.situacao === true,
                }
            })

            setListaEventos(eventosComPresencas)


        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    function abrirModal(tipo, dados) {
        settModalAberto(true)
        setTipoModal(tipo)
        setDadosModal(dados)

    }

    function fecharModal() {
        settModalAberto(false)
        setDadosModal({})
        setTipoModal("")
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                //atualizacao: situacao para    FALSE
            } else if (idPresenca != "") {
                //atualizacao: situacao para    TRUE
                await api.put(`PresencaEventos/${idPresenca}`,
                    { situacao: true });
            } else {
                //Cadastrar nova presenca
                await api.post("PresencaEventos", { situacao: true, idUsuario: usuarioId, idEvento: idEvento });
                Swal.fire('Confirmado!', 'Sua presenca foi confirmada.', 'success')
            }
            listarEventos()
        } catch (error) {
            console.log(error)
        }
    }


    function filtrarEventos() {
        const hoje = new Date();
        return listaEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento);

            if (filtro.includes("todos")) return true;
            if (filtro.includes("futuros") && dataEvento > hoje) return true;
            if (filtro.includes("passados") && dataEvento < hoje) return true;
            return false;
        })
    }
  

    return (
        <>
            <Header />

            <section className="ListagemEvento">
                <h1>Eventos</h1>
                <hr className="linha_titulo" />
                <div className="tabela_listagem layout_grid">

                    <div className="left  seletor">
                        <label htmlFor="eventos"></label>
                        <select onChange={(e) => setFiltro([e.target.value])} name="eventos" id="">
                            <option value="todos" selected>Todos os eventos</option>
                            <option value="">Somente Futuro</option>
                            <option value="">Somente Passados</option>
                        </select>
                    </div>

                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th >Título</th>
                                <th >Data Evento</th>
                                <th >Tipo Evento</th>
                                <th >Descrição</th>
                                <th >Comentários</th>
                                <th >Participar</th>
                            </tr>
                        </thead>

                        <tbody>

                            {listaEventos.length > 0 ? (
                                filtrarEventos() && filtrarEventos().map((item) => (

                                    <tr className="item_listagem espaco">
                                        <td >{item.nomeEvento}</td>
                                        <td >{format(item.dataEvento, "dd/MM/yy")}</td>
                                        <td >{item.tiposEvento.tituloTipoEvento}</td>

                                        <td className="descricao" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                            <button>
                                              
                                                <img src={Descricao} alt="" />
                                            </button>
                                        </td>

                                        <td className="Comentários" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                            <button>
                                                <img src={Comentario} alt="" />
                                            </button>
                                        </td>

                                        <td className="Participar"><Toggle presenca={item.possuiPresenca}
                                        /></td>

                                    </tr>

                                ))
                            ) :
                                (
                                    <p> nenheum evento encontrado</p>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />

            {modalAberto && (

                <Modal
                    titulo={tipoModal == "descricaoEvento" ? "Descrição do evento" : "Comentario"}

                    tipoModel={tipoModal}

                    idEvento={dadosModal.idEvento}

                    descricao={dadosModal.descricao}
                    fecharModal={fecharModal}
                />
            )}
        </>
    );
}

export default ListaEvento;