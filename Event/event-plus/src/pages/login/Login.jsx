import Logo2 from "../../assets/img/undraw_login_re_4vu2 1.png"
import Logo1 from "../../assets/img/logo1 (1).svg"
import Botao from "../../components/botao/Botao";
import "./Login.css"
const Login = () => {
    return (
        <main className="mae_do_login">

            <div className="banner_esquerdo">
            </div>
                

            <section className="section_login">
                <img src={Logo1} alt="" />

                <form action="" className="form_login">
                    <div className="compos_login">
                        <div className="campo_imput">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="username"/>
                        </div>

                        <div className="campo_imput">
                            <label htmlFor="senha"> </label>
                            <input type="password" name="senha" placeholder="password"/>
                        </div>
                        <a href="">Esqueceu sua senha?</a>
                    </div>
                    <Botao />
                </form>


            </section>

        </main>

    )


}
export default Login;