import React, { Component } from "react";
import styles from "./projects.module.scss";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects + " Projects"}>
        <br />
        <br />
        <div id="projects-main" className="container">
          <Link to="/sad">Click</Link>
        </div>
      </div>
    );
  }
}

export default Projects;
