import React, { Component } from "react";
import styles from "./projects.module.scss";

class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects + " Projects"}>
        <br />
        <br />
        <div id="projects-main" className="container">
          <div className="row">
            <div className="col s12 l6"></div>
            <div className="col s12 l6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
