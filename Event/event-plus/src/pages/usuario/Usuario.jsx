import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import mulher from "../../assets/img/mulher.png"
import Lista from "../../components/lista/Lista";
const Usuario = () => {
    return (
        <>
            <Header />
            <main>

                <Cadastro tituloCadastro="Cadastro tipo Usuário    "
                    campoPlaceholder="Gênero"
                    img_banner={mulher}
                    visibilidade="none"
                    nomeDoBotao="Cadastrar"
                />
                <Lista
                    tituloLista="dos Usuarios "
                    titulo="Titulo"
                />
            </main>
            <Footer />
        </>

    )
}
export default Usuario;