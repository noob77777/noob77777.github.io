import React, { Component } from "react";
import styles from "./navbar.module.scss";
import M from "materialize-css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.menuItems = [
      <li key="Home">
        <a href="#header">Home</a>
      </li>,
      <li key="CP">
        <a href="#cp-main">Competitive Programming</a>
      </li>,
      <li key="Timeline">
        <a href="#timeline-main">Timeline</a>
      </li>,
      <li key="Contact">
        <a href="#contact-main">Contact</a>
      </li>,
    ];
  }
  componentDidMount() {
    M.AutoInit();
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("Navbar");
      if (window.scrollY > 555) {
        navbar.classList.remove("transparent");
        navbar.classList.add("solid-nav");
      } else {
        navbar.classList.remove("solid-nav");
        navbar.classList.add("transparent");
      }
    });
  }

  render() {
    return (
      <nav
        className={styles.Navbar + " Navbar nav-wrapper transparent"}
        id="Navbar"
      >
        <div className="container">
          <a href="#header" className="brand-logo">
            noob77777
          </a>
          <a
            href="#Navbar"
            className="sidenav-trigger"
            data-target="mobile-menu"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">{this.menuItems}</ul>
          <ul className={styles.sidenav + " sidenav"} id="mobile-menu">
            <br />
            {this.menuItems}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
