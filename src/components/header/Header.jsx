import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" className="logo" />
      </NavLink>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;