import "./Lista.css";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Excluir.png";



const Lista = (props) => {


    return (
        <section className="listagem">
            <h1>{`Lista ${props.tituloLista}`.toUpperCase()}</h1>
            <hr className="linha_titulo" />

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="tabela_cabecalho">
                            <th className="coluna-esquerda">{props.titulo}</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                                <tr className="item_lista"
                                    key={props.tipoLista == "tipoEvento" ? item.idTipoevento : item.idTipoUsuario}
                                >
                                    <td className="coluna-esquerda" data-cell={props.titulo}>
                                        {props.tipoLista == "tipoEvento" ? item.tituloTipoEvento : item.tituloTipoUsuario}
                                    </td>
                                    <td data-cell="Editar">
                                        <img src={Editar}
                                            onClick={() => props.funcEditar(item)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </td>
                                    <td data-cell="Deletar">
                                        <img
                                            src={Excluir}
                                            onClick={() => props.funcDeletar(item)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </td>
                                </tr>

                            ))

                        ) : (
                            <p className="PP">nenhum evento cadastrado </p>
                        )}



                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default Lista;
