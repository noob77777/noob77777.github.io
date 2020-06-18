import React, { Component } from "react";
import styles from "./header.module.scss";

class Header extends Component {
  render() {
    return (
      <div id="header" className={styles.Header + " Header"}>
        <div>
          <div className={styles.displayPicture}></div>
          <h1>Abhishek Pal</h1>
          <h6>Department of Computer Science and Engineering</h6>
          <h5>Jadavpur University (2018 - 2022)</h5>
          <a href="#second-banner" className={styles.downwardArrow}>
            <i className="material-icons">expand_more</i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
