import { Link } from "react-router-dom";
import "./DropdownList.css";
import Container from "../UI/Container/Container";

function DropdownList({ data }) {
  return (
    <div className="dropdown__container grid grid--items-center">
      <ul className="list grid">
        {data.map((menu, index) => (
          <li className="list__item" key={index}>
            <Link className="list__link font-bold" to="/">
              {menu.mainCategory}
            </Link>
            <div className="list__content flex">
              <div className="list__image-wrapper">
                <img className="list__image" src={menu.image} alt="" />
              </div>
              <ul className="list__inner flow">
                {menu.subCategories.map((subCategory) => (
                  <Link to="/" key={index}>
                    <li className="list__inner-link" key={index}>
                      {subCategory}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownList;
