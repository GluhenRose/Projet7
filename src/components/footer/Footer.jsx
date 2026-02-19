import "./Footer.css";
import logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;