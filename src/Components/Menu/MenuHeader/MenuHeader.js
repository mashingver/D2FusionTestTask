import { Link } from "react-router-dom";
import "./MenuHeader.scss";

const MenuHeader = props => {
  const menuHeaderClasses = `Menu-header ${
    props.menuIsOpened ? "Menu-is-opened" : ""
  }`;

  return (
    <header className={menuHeaderClasses}>
      <div className="Menu-header-container">
        <div className="Menu-header-container-left">
          <Link className="Menu-logo-link" to="/">
            <span className="Menu-logo-link-icon" />
          </Link>
          <span className="Menu-phone-link" />
          <Link className="Menu-catalog-link" to="/catalogue">
            <span className="Menu-catalog-link-icon" />
            <span className="Menu-catalog-link-text">Каталог</span>
          </Link>
          <div className="Menu-search">
            <span className="Menu-search-icon" />
          </div>
        </div>
        <div className="Menu-header-container-right">
          <span className="Menu-phone-link" />
          <span className="Menu-compare-link" />
          <span className="Menu-cart-link" />
          <span className="Menu-profile-link" />
          <span className="Menu-menu-control" onClick={props.handleMenu}>
            <span className="Menu-menu-control-text">Меню</span>
            <span className="Menu-menu-control-icon" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
