import "./Cadastro.css";
import Botao from "../botao/Botao"
import img1 from "../../assets/img/Cadastroo.png"
const Cadastro = (props) => {


    return (
        <section className="section_cadastro">
              <div className="Titulo_cadastro">

               <h1>
                    {props.tituloCadastro}
                </h1>
                <hr />

              </div>

            <form action="" className="layout_grid form_cadastro">
                
           <div className="img_sagui">
           <img className="img_banner" src={props.img_banner} />
            </div> 
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
              
                        <input type="text" placeholder= "Titulo" />

                    </div>
                    <div className="botao_sagui">
                    <div className="campos_cad_genero" style={{display:props.visibilidade}}>
                           
                            <select name="" id="">
                                <option  value="" disabled selected>Genero</option>
                                <option value="">Ação</option>
                                <option value="">Aventura</option>
                                <option value="">Drama</option>
                                <option value="">Comédia</option>
                                

                            </select>

                        </div>
                    <Botao  nomeDoBotao={props.nomeDoBotao} />
                    </div>
                </div>
            </form>
        </section>

    )
}
export default Cadastro;