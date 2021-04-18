import { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuListItem.scss";

class MenuListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubcategories: false
    };

    this.toggleSubcategories = this.toggleSubcategories.bind(this);
  }

  toggleSubcategories() {
    this.setState({
      showSubcategories: !this.state.showSubcategories
    });
  }

  render() {
    if (this.props.listItem.subcategories) {
      const subcategories = (
        <ul className="Category-list">
          {this.props.listItem.subcategories.map((item, index) => {
            return (
              <li className="Category-list-item" key={`${item.label}-${index}`}>
                <span className="Category-label">{item.label}</span>
                <img
                  className="Category-image"
                  src={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
                  alt={item.label}
                />
                <Link className="Category-link" to={item.linkPath} />
              </li>
            );
          })}
        </ul>
      );

      return (
        <li className="Menu-list-item Menu-list-item-with-subcategories">
          <span className="Menu-list-link" onClick={this.toggleSubcategories}>
            {this.props.listItem.label}
          </span>
          {this.state.showSubcategories && subcategories}
        </li>
      );
    }

    return (
      <li className="Menu-list-item">
        <Link className="Menu-list-link" to={this.props.listItem.linkPath}>
          {this.props.listItem.label}
        </Link>
      </li>
    );
  }
}

export default MenuListItem;
