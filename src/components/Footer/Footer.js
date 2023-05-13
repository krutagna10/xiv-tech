import Container from "../UI/Container/Container";
import logo from "../../assets/logo-light.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__container grid grid--items-center">
        <div className="footer__column">
          <Link to="/">
            <img className="footer__logo" src={logo} alt="Rural Art" />
          </Link>
          <p className="footer__description">
            By leveraging our full spectrum strategy, design, and technology
            capabilities, we deliver game-changing outcomes for our clients
            around the world.
          </p>
        </div>
        <div className="footer__column">
          <p>Locations</p>
          <p>Toronto</p>
          <p>New Delhi</p>
        </div>
        <div className="footer__column">
          <Link to="/">Services</Link>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <Link to="/">Complete AI + RPA Automation</Link>
              </li>
              <li>
                <Link to="/">Cloud Services</Link>
              </li>
              <li>
                <Link to="/">Delivery Pipeline Automation</Link>
              </li>
              <li>
                <Link to="/">Simplify Cloud Ops</Link>
              </li>
              <li>
                <Link to="/">Build Better Apps</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__column">
          <p>XivTech</p>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
