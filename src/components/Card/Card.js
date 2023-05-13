import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title, description, linkPath, linkText, image, alt }) {
  return (
    <div className="card grid gap">
      <h3 className="card__title font-size-500">{title}</h3>
      <div className="card__image-wrapper">
        <img className="card__image" src={image} alt={alt} />
      </div>
      <div className="card__content">
        <p className="card__description">{description}</p>
        <Link className="card__link font-bold" to={linkPath}>
          {linkText} ->
        </Link>
      </div>
    </div>
  );
}

export default Card;
