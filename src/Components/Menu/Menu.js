import { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Menu.scss";

import { menuArray } from "../../appData";

import MenuHeader from "./MenuHeader/MenuHeader";
import MenuContent from "./MenuContent/MenuContent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpened: false
    };

    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        menuIsOpened: false
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleMenu() {
    this.setState({
      menuIsOpened: !this.state.menuIsOpened
    });
  }

  render() {
    return (
      <section className="Menu">
        <MenuHeader
          menuIsOpened={this.state.menuIsOpened}
          handleMenu={this.handleMenu}
        />

        <MenuContent isOpened={this.state.menuIsOpened} menuArray={menuArray} />
      </section>
    );
  }
}

export default withRouter(Menu);
