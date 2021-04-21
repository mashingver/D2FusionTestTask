import "./MenuSubcategoryList.scss";
import { Link } from "react-router-dom";

const MenuSubcategoryList = props => {
  return (
    <ul className="MenuSubcategoryList">
      {props.subcategories.map((subcategory, index) => {
        return (
          <li
            className="MenuSubcategoryList-item"
            key={`${subcategory.label}-${index}`}
          >
            <span className="MenuSubcategoryList-label">
              {subcategory.label}
            </span>
            <img
              className="MenuSubcategoryList-image"
              src={`${process.env.PUBLIC_URL}/images/${subcategory.imageName}`}
              alt={subcategory.label}
            />
            <Link
              className="MenuSubcategoryList-link"
              to={subcategory.linkPath}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuSubcategoryList;
