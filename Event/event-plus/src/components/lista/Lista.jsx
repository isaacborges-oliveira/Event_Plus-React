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
                        <tr className="item_lista">
                            <td className="coluna-esquerda" data-cell={props.titulo}>Tipo Evento</td>
                            <td data-cell="Editar">
                                <img src={Editar} className="icon-button" alt="Editar" />
                            </td>
                            <td data-cell="Deletar">
                                <img src={Excluir} className="icon-button" alt="Deletar" />
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default Lista;
