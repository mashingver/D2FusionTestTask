import { Component } from "react";
import { Link } from "react-router-dom";
import MenuSubcategoryList from "../MenuSubcategoryList/MenuSubcategoryList";
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
    let listItemLink;
    let subcategories;
    const imagePreview = (
      <span
        className="MenuListItem-preview"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${this.props.listItem.previewImageName})`
        }}
      />
    );

    if (this.props.listItem.subcategories) {
      listItemLink = (
        <span
          className="MenuListItem-link"
          onClick={this.toggleSubcategories}
          onMouseEnter={this.togglePreview}
          onMouseLeave={this.togglePreview}
        >
          {this.props.listItem.label}
        </span>
      );

      subcategories = (
        <MenuSubcategoryList
          subcategories={this.props.listItem.subcategories}
        />
      );
    } else {
      listItemLink = (
        <Link
          className="MenuListItem-link"
          to={this.props.listItem.linkPath}
          onMouseEnter={this.togglePreview}
          onMouseLeave={this.togglePreview}
        >
          {this.props.listItem.label}
        </Link>
      );
    }

    return (
      <li className="MenuListItem">
        {listItemLink}
        {this.state.showSubcategories && subcategories}
        {this.state.showPreview &&
          !this.state.showSubcategories &&
          imagePreview}
      </li>
    );
  }
}

export default MenuListItem;
