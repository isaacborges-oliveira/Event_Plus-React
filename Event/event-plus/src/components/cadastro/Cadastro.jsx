import "./Cadastro.css"
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                <h1>{props.titulo}</h1>
                <hr />
            </div>

            <section className="section_cadastro">
                <div className="banner_cadastro">
                    <img src={props.imagem} alt="Fundo banner do cadastro eventos" />
                </div>

                <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">

                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="Nome"></label>
                            <input type="text"
                                name="nome"
                                placeholder={props.place}
                                value={props.valorInput}
                                onChange={(e) => props.setValorInput(e.target.value)}
                            />

                        </div>
                        <div className="campo_cad_titulo">
                            <input type="date"
                                value={props.valorDate}
                                style={{ display: props.visibilidade }}
                                onChange={(e) => props.setValorDate(e.target.value)}
                            />
                        </div>
                        <div className="campo_cad_titulo opcao" style={{ display: props.visibilidade }}>
                            <label htmlFor="Nome"></label>
                            <select name="Tipo De Evento" id="" className="select_cad"
                                value={props.valorSelect}
                                onChange={(e) => props.setValorSelect(e.target.value)}
                            >

                                <option value="" disabled selected>Tipo de Evento</option>
                                {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) => (
                                    (
                                        <option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>

                                    ))
                                )}
                            </select>

                        </div>
                        <div className="campo_cad_titulo">
                            <select name="" id=""
                                value={props.valorSelect2}
                                style={{ display: props.visibilidade }}
                                onChange={(e) => props.setValorSelect2(e.target.value)}
                            >
                                <option selected value="">Senai</option>
                            </select>
                            <textarea name="" id="" placeholder="Descrição" className="descricao"
                                value={props.valorText}
                                style={{ display: props.visibilidade }}
                                onChange={(e) => props.setValorText(e.target.value)}
                            ></textarea>
                        </div>

                        <Botao  nomeDoBotao="Cadastrar" />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Cadastro;