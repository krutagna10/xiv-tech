import { IonIcon } from "@ionic/react";
import { chevronUpOutline, chevronDownOutline } from "ionicons/icons";
import data from "./data";
import { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import Backdrop from "../UI/Backdrop/Backdrop";
import DropdownList from "../DropdownList/DropdownList";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="dropdown">
      <button
        onClick={toggleIsOpen}
        className={`dropdown__btn ${isOpen ? "bold" : ""}`}
      >
        Services
        {isOpen ? (
          <IonIcon icon={chevronUpOutline} />
        ) : (
          <IonIcon icon={chevronDownOutline} />
        )}
      </button>
      {isOpen && <DropdownList data={data} />}
      {isOpen && <Backdrop />}
    </div>
  );
}

export default Dropdown;
