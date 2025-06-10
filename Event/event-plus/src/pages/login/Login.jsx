import Logo2 from "../../assets/img/undraw_login_re_4vu2 1.png"
import Logo1 from "../../assets/img/logo1 (1).svg"
import Botao from "../../components/botao/Botao";
import "./Login.css"
import api from "../../Services/services";
import Swal from 'sweetalert2'
import { userDecodeToken } from "../../auth/Auth";
import { useState } from "react";
//componente funcional
const Login = () => {



    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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

    async function realizarAutenticacao(e) {
        e.preventDefault();

        const usuario = {
            email: email,
            senha: senha
        }

        if (senha.trim() != "" || email.trim() != "") {
            try {
                const resposta = await api.post("Login", usuario);
                const token = resposta.data.token

                if (token) {
                 const tokenDecodificado =   userDecodeToken(token);

                    // console.log("token decodificadp");
                    // console.log(tokenDecodificado.tipoUsuario)
                    

                }

            } catch (error) {
                console.log(error);
            }
        } else {
            alertar("error", "Viado gay, escreva algo ai")
        }
    }



    return (
        <main className="mae_do_login">

            <div className="banner_esquerdo">
            </div>


            <section className="section_login">
                <img src={Logo1} alt="" />

                <form action="" className="form_login" onSubmit={realizarAutenticacao}>
                    <div className="compos_login">
                        <div className="campo_imput">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>

                        <div className="campo_imput">
                            <label htmlFor="senha"> </label>
                            <input type="password" name="senha" placeholder="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}

                            />
                        </div>
                        <a href="">Esqueceu sua senha?</a>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                </form>


            </section>

        </main>

    )


}
// rafce
export default Login;