import Container from "../UI/Container/Container";
import "./Footer.css";
import logo from "../../assets/shared/logo-light.svg";
import { logoFacebook } from "ionicons/icons";
import { logoInstagram } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoPinterest } from "ionicons/icons";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__container grid grid--items-center">
        <div className="footer__logo-wrapper">
          <Link to="/">
            <img className="footer__logo" src={logo} alt="Rural Art" />
          </Link>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list flex flex--gap">
            <li>
              <Link className="footer__nav-link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="footer__nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="footer__nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="footer__social-list flex flex--gap">
          <li>
            <Link
              className="footer__social-link"
              to="https://www.facebook.com/"
            >
              <IonIcon className="footer__social-icon" icon={logoFacebook} />
            </Link>
          </li>
          <li>
            <Link
              className="footer__social-link"
              to="https://www.instagram.com/"
            >
              <IonIcon icon={logoInstagram} />
            </Link>
          </li>
          <li>
            <Link className="footer__social-link" to="/https://twitter.com">
              <IonIcon icon={logoTwitter} />
            </Link>
          </li>
          <li>
            <Link
              className="footer__social-link"
              to="https://in.pinterest.com/"
            >
              <IonIcon icon={logoPinterest} />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
