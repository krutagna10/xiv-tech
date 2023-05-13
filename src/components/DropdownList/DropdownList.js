import { Link } from "react-router-dom";
import "./DropdownList.css";

function DropdownList({ data }) {
  return (
    <ul className="list">
      {data.map((menu, index) => (
        <li key={index}>
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
  );
}

export default DropdownList;
