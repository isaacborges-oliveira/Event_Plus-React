import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Img1 from "../../assets/img/Homem.png"
import Lista from "../../components/lista/Lista";

const CadastroEvento = () => {
    return (
        <>
            <Header />
            <main>

                <Cadastro tituloCadastro="Cadastro de Evento"
                    campoPlaceholder="Gênero"
                    img_banner={Img1}
                    
                    nomeDoBotao="Cadastrar"
                />
                <Lista
                    tituloLista="de eventos "
                    titulo="Titulo"
                />

            </main>
            <Footer />
        </>

    )
}
export default CadastroEvento;