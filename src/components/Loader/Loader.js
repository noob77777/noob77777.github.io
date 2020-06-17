import React, { Component } from "react";
import styles from "./loader.module.scss";

class Loader extends Component {
  componentDidMount() {
    setTimeout(this.props.toggleState, 3000);
  }

  render() {
    return (
      <div className={styles.Loader + " Loader"}>
        <h1>Hi.</h1>
        <div className={styles.loader}></div>
        <div className={styles.imageLoader}></div>
      </div>
    );
  }
}

export default Loader;
