import { Link } from "react-router-dom";
import "./MenuListItem.scss";

const MenuListItem = props => {
  return (
    <li className="Menu-list-item">
      <Link className="Menu-list-link" to={props.linkPath}>
        {props.label}
      </Link>
    </li>
  );
};

export default MenuListItem;
