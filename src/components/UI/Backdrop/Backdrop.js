import "./Backdrop.css";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("backdrop");

function Backdrop() {
  return ReactDOM.createPortal(<div className="backdrop" />, portalElement);
}

export default Backdrop;