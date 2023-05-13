import { IonIcon } from "@ionic/react";
import { chevronUpOutline, chevronDownOutline } from "ionicons/icons";
import data from "./data";
import { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="dropdown">
      <button
        onClick={toggleIsOpen}
        className="dropdown__btn flex flex--center gap"
      >
        Services
        <IonIcon icon={chevronDownOutline} />
      </button>
      {isOpen && (
        <ul className="dropdown__list flow">
          {data.map((menu, index) => (
            <li key={index}>
              <Link className="dropdown__list-item font-bold" to="/">
                {menu.mainCategory}
              </Link>
              <ul className="dropdown__inner-list font">
                {menu.subCategories.map((subCategory) => (
                  <Link to="/" key={index}>
                    <li className="dropdown__inner-list-item" key={index}>
                      {subCategory}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
