import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import mulher from "../../assets/img/mulher.png"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const Usuario = () => {

    const [usuario, setUsuario] = useState("");
    const [ListaUsuario, setListaUsuario] = useState([]);

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function cadastrarUsuario(e) {
        e.preventDefault();

        if (usuario.trim() !== "") {
            try {
                await api.post("TiposUsuarios", { tituloTipoUsuario: usuario });
                alertar("success", "Usuário cadastrado com sucesso");
                setUsuario("");
                listarUsuario();
            } catch (error) {
                alertar("error", "Cadastro não realizado, primata");
                console.log(error);
            }
        } else {
            alertar("warning", "Primata, digite o tipo de usuário");
        }
    }

    async function listarUsuario() {
        try {
            const resposta = await api.get("TiposUsuarios");
            setListaUsuario(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function excluirUsuario(id) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`TiposUsuario/${id}`); //interpolação
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }

    async function editarUsuario(id, novoTitulo) {
        if (novoTitulo.trim() === "") {
      
            try {
                await api.put(`TiposUsuarios/${id}`, { tituloTipoUsuario: novoTitulo });
                alertar("success", "Usuário atualizado com sucesso");
                listarUsuario();
            } catch (error) {
                alertar("error", "Erro ao atualizar usuário");
                console.log(error);
            }
        }else{
             alertar("warning", "O título não pode estar vazio");
        }
    }

    useEffect(() => {
        listarUsuario();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro tipo Usuário"
                    campoPlaceholder="usuário"
                    img_banner={mulher}
                    visibilidade="none"
                    nomeDoBotao="Cadastrar"
                    valorInput={usuario}
                    setValorInput={setUsuario}
                    funcCadastro={cadastrarUsuario}
                />
                <Lista
                    tituloLista="dos Usuários"
                    titulo="Título"
                    lista={ListaUsuario}
                    funcDeletar={excluirUsuario}
                    funcEditar={editarUsuario}
                />
            </main>
            <Footer />
        </>
    )
}
export default Usuario;
