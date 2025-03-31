import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./reponsive.css";
import "./header.css";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <h1>Dev.Leandro</h1>
      
      {/* Ícone de hambúrguer que abre/fecha o menu */}
      <span onClick={toggleMenu} className="menu-icon">
        <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} size="lg" />
      </span>

      {/* Menu que abre/fecha dinamicamente */}
      <nav className={menuAberto ? "menu aberto" : "menu"}>
        <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        <Link to="/Contato" onClick={() => setMenuAberto(false)}>Contato</Link>
      </nav>
    </header>
  );
}
