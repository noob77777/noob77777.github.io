import React, { Component } from "react";
import styles from "./notfound.module.scss";

class NotFound extends Component {
  render() {
    return (
      <div className={styles.NotFound}>
        <div className="container">
          <h1>404 : Page Not Found</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
