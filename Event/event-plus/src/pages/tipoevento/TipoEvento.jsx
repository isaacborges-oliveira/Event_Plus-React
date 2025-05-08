import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Img1 from "../../assets/img/Cadastroo.png"
import Lista from "../../components/lista/Lista";

const TipoEvento = () => {
    return (
     <>
     <Header/>
     <main>
 
     <Cadastro tituloCadastro="Cadastro de Gênero"
                    campoPlaceholder="Gênero"
                    img_banner = {Img1}
                    visibilidade="none"
                    nomeDoBotao="Cadastrar"
                />
<Lista
tituloLista = "do Tipo Evento "
titulo = "Titulo"
/>

     </main>
     <Footer/>
     </>

    )
}
export default TipoEvento;