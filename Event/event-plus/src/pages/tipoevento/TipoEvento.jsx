import { useEffect, useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Img1 from "../../assets/img/Cadastroo.png"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import Swal from 'sweetalert2';


const TipoEvento = () => {

    const [evento, setEvento] = useState("");
    const [listaEvento, setlistaEvento] = useState("");

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
    async function cadastrarEvento(e) {
        e.preventDefault();


        if (evento.trim() != "") {

            try {
                await api.post("TiposEventos", { tituloTipoEvento: evento });

                alertar("success", "Cadastro realizado com sucesso")

                setEvento("")



            } catch (error) {

                alertar("error", "Cadastro não realizado, primata")
                console.log(error);
            }
        } else {


            alertar("warning", "primata, digite o gênero")
        }
    }
    async function deletarEvento(id) {
        const resultado = await Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#3F3D56',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        });

        if (resultado.isConfirmed) {
            try {
                await api.delete(`TiposEventos/${id.idTipoEvento}`); 
                alertar("success", "Evento excluído com sucesso!");
                listarTipoEvento();
            } catch (error) {
                console.log(error);
                alertar("error", "Erro ao Excluir!");
            }
        }
    }
    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");

            setlistaEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
        listarTipoEvento();
    }

    async function editarTipoEvento(tipo) {
    const { value: novoTipo } = await Swal.fire({
        title: "Modifique o Tipo de Evento",
        input: "text",
        inputLabel: "Novo Tipo",
        inputValue: tipo.tituloTipoEvento,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "O campo não pode estar vazio";
            }
        }
    });
    if (novoTipo) {
        try {
            await api.put(`TiposEventos/${tipo.idTipoEvento}`,
                { tituloTipoEvento: novoTipo });
            Swal.fire(`Tipo de Evento modificado para ${novoTipo}`);
        } catch (error) {
            console.log(error);
        }
    }
}


    useEffect(() => {
        listarTipoEvento();
    }, []);


    return (
        <>
            <Header />
            <main>

                <Cadastro titulo="Cadastro Tipo Evento "
                    campoPlaceholder="Gênero"
                   imagem={Img1}  
                    visibilidade="none"
                    nomeDoBotao="Cadastrar"
                    funcCadastro={cadastrarEvento}
                    valorInput={evento}
                    setValorInput={setEvento}
                />
                <Lista
                    tituloLista="do Tipo Evento "
                    titulo="Titulo"
                    lista={listaEvento}
                    excluir={deletarEvento}
                    editar  = {editarTipoEvento}
                    tipoLista="tipoEvento"
                      visibilidade="none"
                />

            </main>
            

            <Footer />
        </>

    )
}
export default TipoEvento;