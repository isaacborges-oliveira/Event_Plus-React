import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Img1 from "../../assets/img/Cadastroo.png"

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


     </main>
     <Footer/>
     </>

    )
}
export default TipoEvento;