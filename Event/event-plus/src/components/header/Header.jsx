import "./Header.css";
import Logo1 from "../../assets/img/logo1 (1).svg"
import Admin from "../../assets/img/Vector.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="layout_grid cabecalho">
        {/*Estou a redeirecionar ao clickar na logo */}
        <Link to="/">

          <img className="Event_img" src={Logo1} alt="Logo do event" />

        </Link>
        <nav className="nav_header">
          <Link to="/Home" className="link_header" href="">Home</Link>
          <Link to="/eventos" className="link_header" href="">eventos</Link>
          <Link to="/Usuario" className="link_header" href="">Usuários</Link>
          <Link to="/eventlista" className="link_header" href="">listagem</Link>
        </nav>

        <nav className="nav_header admin">

          <Link to="/Administrador" className="_adm" href="">Administrador</Link>
          <img src={Admin} alt="" className="Adiminimage" />
        </nav>

      </div>
    </header>
  )
}
export default Header;