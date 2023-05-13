import Container from "../UI/Container/Container";
import logo from "../../assets/logo-light.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer grid grid--content-center">
      <Container className="footer__container grid">
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
          <p className="font-size-300 font-bold">Locations</p>
          <p>Toronto</p>
          <p>New Delhi</p>
        </div>

        <div className="footer__column">
          <Link className="footer__link font-size-300 font-bold" to="/">
            Services
          </Link>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <Link className="footer__link" to="/">
                  Complete AI + RPA Automation
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Delivery Pipeline Automation
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Simplify Cloud Ops
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Build Better Apps
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__column">
          <p className="font-size-300 font-bold">XivTech</p>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <Link className="footer__link" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="footer__link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
