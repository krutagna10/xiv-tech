import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title, description, linkPath, linkText, image, alt }) {
  return (
    <div className="card grid gap">
      <div className="card__image-wrapper">
        <img className="card__image" src={image} alt={alt} />
      </div>
      <div className="card__content grid gap">
        <h3 className="font-size-400">{title}</h3>
        <p className="card__description">{description}</p>
        <Link className="card__link font-bold" to={linkPath}>
          {linkText} ->
        </Link>
      </div>
    </div>
  );
}

export default Card;
