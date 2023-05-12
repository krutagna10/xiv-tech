import { IonIcon } from "@ionic/react";
import { chevronUpOutline, chevronDownOutline } from "ionicons/icons";
import { useState } from "react";
import "./Dropdown.css";

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
        <ul className="dropdown__list">
          <li>Complete AI + RPA</li>
          <li>Automation</li>
          <li>Cloud Services</li>
          <li>Delivery Pipeline Automation</li>
          <li>Simplify Cloud Ops</li>
          <li>Build Better Apps</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
