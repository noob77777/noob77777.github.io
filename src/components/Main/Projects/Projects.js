import React, { Component } from "react";
import styles from "./projects.module.scss";

class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects + " Projects"}>
        <div id="projects-main" className="container">
          <br />
          <br />
          <div className="row">
            <div className={styles.projectsHeader + " col s12"}>
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l5">
              <div className={styles.card + " card"}>
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={require("../../../img/firebird.png")}
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator">
                    Firebird
                    <i className="material-icons right">arrow_drop_up</i>
                  </span>
                  <p>Real time messenger</p>
                </div>
                <div className="card-action">
                  <a
                    href="https://noob77777.github.io/firebird.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={styles.link}
                  >
                    Link
                  </a>
                </div>
                <div className="card-reveal">
                  <span className="card-title">
                    FireBird<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Created using Bootstrap and Firebase real-time database.{" "}
                  </p>
                  <p>
                    Major changes in progress. Shifting to React, Express and
                    MongoDB.
                    <br /> User Interface changes pending.
                  </p>
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="col s12 l5 offset-l2">
              <div className={styles.card + " card"}>
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src={require("../../../img/project2.jpg")}
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator ">
                    Deep Learning in C++
                    <i className="material-icons right">arrow_drop_up</i>
                  </span>
                  <p>Work in progress...</p>
                </div>
                <div className="card-action">
                  <a href="/#projects-main" id={styles.link}>
                    Link
                  </a>
                </div>
                <div className="card-reveal">
                  <span className="card-title">
                    Deep Learning in C++
                    <i className="material-icons right">close</i>
                  </span>
                  <p></p>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
