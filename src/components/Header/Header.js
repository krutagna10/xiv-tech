import Container from "../UI/Container/Container";
import logo from "../../assets/shared/logo-dark.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

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
        <nav className="header__nav flex" aria-label="Primary">
          <ul
            id="header__nav-list"
            className="header__nav-list flex flex--gap"
            data-visible={isNavigationOpen}
          >
            <li>
              <Link className="header__nav-link" to="/">
                Services
              </Link>
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
          <div className="header__btns-wrapper">
            <button className="header__search-btn">
              <IonIcon icon={searchOutline} />
            </button>
            <button className="header__btn btn btn--light">Let's talk</button>
          </div>
        </nav>
        {isNavigationOpen && <Backdrop />}
      </Container>
    </header>
  );
}

export default Header;
