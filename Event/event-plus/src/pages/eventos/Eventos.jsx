
import { useEffect, useState } from "react";
import api from "../../Services/services";
import Swal from 'sweetalert2'


import Cadastro from "../../components/cadastro/Cadastro"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista"
import Img1 from "../../assets/img/Cadastroo.png"

const CadastrarEvento = () => {
    const [evento, setEvento] = useState("");
    const [dataevento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("5C0B4A4B-1EA5-401E-866D-9E6DACD156F0");
    const [tipoevento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])



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

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("tiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }

    }
    async function editarTipoEvento(evento) {
        try {
            const tiposOptions = listaTipoEvento
                .map(tipo => `<option value="${tipo.idTipoEvento}" ${tipo.idTipoEvento === evento.idTipoEvento ? 'selected' : ''}>${tipo.tituloTipoEvento}</option>`)
                .join('');

            const { value } = await Swal.fire({
                title: "Editar Tipo de Evento",
                html: `
        <input id="campo1" class="swal2-input" placeholder="Título" value="${evento.nomeEvento || ''}">
        <input id="campo2" class="swal2-input" type="date" value="${evento.dataEvento?.substring(0, 10) || ''}">
        <select id="campo3" class="swal2-select">${tiposOptions}</select>
        <input id="campo4" class="swal2-input" placeholder="Categoria" value="${evento.descricao || ''}">
      `,
                showCancelButton: true,
                confirmButtonText: "Salvar",
                cancelButtonText: "Cancelar",
                focusConfirm: false,
                preConfirm: () => {
                    const campo1 = document.getElementById("campo1").value;
                    const campo2 = document.getElementById("campo2").value;
                    const campo3 = document.getElementById("campo3").value;
                    const campo4 = document.getElementById("campo4").value;

                    if (!campo1 || !campo2 || !campo3 || !campo4) {
                        Swal.showValidationMessage("Preencha todos os campos.");
                        return false;
                    }

                    return { campo1, campo2, campo3, campo4 };
                }
            });

            if (!value) {
                console.log("Edição cancelada pelo usuário.");
                return;
            }

            console.log("Dados para atualizar:", value);

            await api.put(`eventos/${evento.idEvento}`, {
                nomeEvento: value.campo1,
                dataEvento: value.campo2,
                idTipoEvento: value.campo3,
                descricao: value.campo4,
            });

            console.log("Evento atualizado com sucesso!");
            Swal.fire("Atualizado!", "Dados salvos com sucesso.", "success");
            listarEvento();

        } catch (error) {
            console.log("Erro ao atualizar evento:", error);
            Swal.fire("Erro!", "Não foi possível atualizar.", "error");
        }
    }
    async function mostrarDescricao(descricao) {
        const result = await Swal.fire({
            title: "Descrição do evento", // "Deseja continuar?"
            text: `Descrição: ${descricao}`, // Mostra a descrição atual
            icon: "question",
            iconHtml: "@",
            confirmButtonText: "Tendi", // "Sim"
            showCancelButton: true,
            showCloseButton: true
        });

        return result.isConfirmed;
    }



    async function listarEvento() {
        try {
            const resposta = await api.get("eventos")
            setListaEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }

    async function excluirEvento(id) {

        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#b51d44',
            cancelButtonColor: '#b5b5b5',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`TiposEventos/${id.idTipoEvento}`);
                alertar("success", "Gênero Excluido!")
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }

    async function cadastrarEvento(evt) {
        evt.preventDefault();
        if (evento.trim() != "") {
            try {
                await api.post("eventos", {
                    nomeEvento: evento,
                    idTipoEvento: tipoevento,
                    dataEvento: dataevento,
                    descricao: descricao,
                    idInstituicao: instituicao
                });
                alertar("success", "Cadastro realizado com sucesso!");
                setEvento("");
                setDataEvento();
                setDescricao("");
                setTipoEvento("");

            } catch (error) {
                alertar("error", "Entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")

        }
    }

    useEffect(() => {
        listarTipoEvento();
        listarEvento();
    }, [listaEvento]);

    return (
        <>
            <Header nomeUsu="Administrador" />
            <Cadastro
                titulo="Cadastrar Evento"
                imagem={Img1}
                place="Nome"

                funcCadastro={cadastrarEvento}

                valorInput={evento}
                setValorInput={setEvento}

                valorSelect={tipoevento}
                setValorSelect={setTipoEvento}

                valorSelect2={instituicao}
                setValorSelect2={setInstituicao}

                valorDate={dataevento}
                setValorDate={setDataEvento}

                valorText={descricao}
                setValorText={setDescricao}

                lista={listaTipoEvento}
            />
            <Lista
                tituloLista=" de Evento"
                tdnome="Nome Evento"
                tituloEvento="Nome"
                nomeEvento1="Titulo Evento"
                nomeEvento2="Titulo Evento"
                listarEvento={listaEvento}
                lista={listaEvento}
                excluir={excluirEvento}
                valorText={descricao}
                editar={editarTipoEvento}

                descricao={mostrarDescricao}
            />
            <Footer />
        </>
    )
}

export default CadastrarEvento;
