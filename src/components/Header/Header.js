import Container from "../UI/Container/Container";
import logo from "../../assets/logo-dark.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../UI/Button/Button";

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function toggleIsNavigationOpen() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  return (
    <header className="header">
      <Container className="header__container flex flex--align-center flex--justify-space">
        <div className="header__link-wrapper">
          <Link to="/">
            <img className="header__link-logo" src={logo} alt="Rural Art" />
          </Link>
        </div>
        <button
          className="header__nav-toggle"
          aria-controls="header__nav-list"
          aria-expanded={isNavigationOpen}
          onClick={toggleIsNavigationOpen}
        >
          <span className="visually-hidden">Menu</span>
        </button>
        <div className="header__content flex--align-center">
          <nav className="header__nav" aria-label="Primary">
            <ul
              id="header__nav-list"
              className="header__nav-list"
              data-visible={isNavigationOpen}
            >
              <li>
                <Dropdown />
              </li>
              <li>
                <Link className="header__nav-link" to="/">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="header__nav-link" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="header__nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__btns-wrapper flex--align-center">
            <button className="header__btn header__btn--search">
              <IonIcon icon={searchOutline} />
            </button>
            <Button className="header__btn header__btn-cta btn--light">
              Let's talk
            </Button>
          </div>
        </div>
        {isNavigationOpen && <Backdrop />}
      </Container>
    </header>
  );
}

export default Header;
