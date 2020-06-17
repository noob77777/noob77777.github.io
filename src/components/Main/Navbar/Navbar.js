import React, { Component } from "react";
import styles from "./navbar.module.scss";
import M from "materialize-css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.menuItems = [
      <li>
        <a href="#header">Home</a>
      </li>,
    ];
  }
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <nav className={styles.Navbar + " Navbar nav-wrapper transparent"}>
        <div className="container">
          <a href="#header" className="brand-logo">
            noob77777
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{this.menuItems}</ul>
          <ul className={styles.sidenav + " sidenav"} id="mobile-menu">
            {this.menuItems}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
