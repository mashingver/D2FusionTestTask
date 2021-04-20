import { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuListItem.scss";

class MenuListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubcategories: false,
      showPreview: false
    };

    this.toggleSubcategories = this.toggleSubcategories.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  toggleSubcategories() {
    this.setState({
      showSubcategories: !this.state.showSubcategories
    });
  }

  togglePreview() {
    this.setState({
      showPreview: !this.state.showPreview
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
        <li className="MenuListItem">
          <span
            className="MenuListItem-link"
            onClick={this.toggleSubcategories}
            onMouseEnter={this.togglePreview}
            onMouseLeave={this.togglePreview}
          >
            {this.props.listItem.label}
          </span>
          {this.state.showPreview && (
            <span
              className="MenuListItem-preview"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${this.props.listItem.previewImageName})`
              }}
            />
          )}

          {this.state.showSubcategories && subcategories}
        </li>
      );
    }

    return (
      <li className="MenuListItem">
        <Link className="MenuListItem-link" to={this.props.listItem.linkPath}>
          {this.props.listItem.label}
        </Link>
      </li>
    );
  }
}

export default MenuListItem;
