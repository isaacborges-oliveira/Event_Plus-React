import "./Lista.css";
import Editar from "../../assets/img/Editar.png"
import Excluir from "../../assets/img/Excluir.png"
import Decricao from "../../assets/img/informacoes 1.png";



const Lista = (props) => {
    return (
        <>
            <section className="listagem">
                <h1>{`Lista  ${props.tituloLista}`}</h1>
                <hr className="linha_titulo" />



                <div className="tabela layout_grid">
                    <table>
                        <thead>
                            <tr className="tabela_cabecalho">
                                <th className="left">{props.titulo}</th>
                                <th className="left" style={{ display: props.visibilidade }}>Data do Evento</th>
                                <th className="left" style={{ display: props.visibilidade }}>Tipo Evento</th>
                                <th className="right">Editar</th>
                                <th className="right">Excluir</th>
                                <th className="right" style={{ display: props.visibilidade }}>Descrição</th>
                                
                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (

                                    <tr className="item_lista" key={props.tipoLista == "tipoEvento" ? item.idTipoEvento : props.tipoLista == "tipoUsuario" ?  item.idTipoUsuario : props.tipoLista == "cadastroEvento" ? item.idEvento: item.idEvento}>
                                        <td className="left" data-cell="Nome">

                                            {props.tipoLista == "tipoEvento" ? item.tituloTipoEvento : props.tipoLista == "tipoUsuario" ? item.tituloTipoUsuario :props.tipoLista == "cadastroEvento"? item.nomeEvento : item.nomeEvento}
                                        </td>
                                        <td className="left" data-cell="Data do Evento"  style={{ display: props.visibilidade }}>
                                            {item.dataEvento}
                                        </td>
                                        <td className="left" data-cell="Tipo Evento" style={{ display: props.visibilidade }} >{item.tiposEvento?.tituloTipoEvento}</td>
                                        <td className="right" data-cell="Editar">
                                            <img
                                                src={Editar}
                                                alt="caneta"
                                                onClick={() => (props.editar(item))}
                                            />
                                        </td>

                                        <td className="right" data-cell="Excluir">
                                            <img src={Excluir}
                                                alt="lixeira"
                                                onClick={() => (props.excluir(item))}
                                            />
                                        </td>
                                        
                                        <td className="right" data-cell="Descrição"  style={{ display: props.visibilidade }}>
                                            <img src={Decricao}
                                             alt="Descrição" 
                                             onClick={() => props.descricao(item.descricao)}

                                             />
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <td  className="mensagem" colSpan="4">Nenhum gênero foi encontrado.</td>
                            )
                            }



                        </tbody>
                    </table>
                </div>


            </section>

        </>
    )
}


export default Lista;