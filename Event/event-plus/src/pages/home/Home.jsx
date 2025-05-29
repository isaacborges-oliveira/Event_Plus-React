import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import imagemBanner from "../../assets/img/Fundoo.png"
import Mapa from "../../assets/img/Mapa.png";


const Home = () => {
    return (
        <>
            <Header />

            <main>

                <section className="hero" style={{ backgroundImage: `url(${imagemBanner})` }}>
                   

            
                            
                    <div className="hero-content" >
                       
                        <div className="linha-com-icone">
                            
                        </div>
                   
                    </div>

                </section>


                <section className="eventos">
                    <h2>PRÓXIMOS EVENTOS</h2>
                    <div className="eventos-cards">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="card">
                                <h3>Título do Evento</h3>
                                <p>Breve descrição do evento, pode ser um parágrafo pequeno</p>
                                <button>Conectar</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visão */}
                <section className="visao">
                    <h2>VISÃO</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>

                {/* Contato */}
                <section className="contato" >
                    <div className="mapa" style={{ backgroundImage: `url(${Mapa})` }}></div>
                    <div className="info">
                        <p>Rua Natal, 103 – Centro</p>
                        <p>São Caetano do Sul – SP</p>
                        <p>(11) 4325-2030</p>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
