import React, { Component } from "react";
import styles from "./cp.module.scss";
import Astronaut from "./Astronaut";

class CP extends Component {
  render() {
    return (
      <div id="second-banner" className={styles.CP + " CP"}>
        <br />
        <br />
        <div className="container">
          <div className={styles.introduction + " row"}>
            <div className="col s12 l6">
              <div className={styles.introductionLeft}>
                <div>
                  <h3>Hi, I'm Abhishek!</h3>
                  <p>
                    I am a sophomore at <strong>Jadavpur University</strong>,{" "}
                    majoring in{" "}
                    <strong>
                      Computer Science and Engineering (expected 2022)
                    </strong>
                    . I am also interning with competitive programming site{" "}
                    <strong>CodeChef, Directi</strong> as a software engineer.
                  </p>
                  <p>
                    I like <strong>Competitive Programming</strong> and have
                    spent most of my time in college on sites like{" "}
                    <strong>CodeChef</strong> and <strong>Codeforces</strong>. I
                    also like <strong>Web Development</strong> and{" "}
                    <strong> Databases</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 l6 hide-on-med-and-down">
              <Astronaut />
            </div>
          </div>
        </div>

        <div class={styles.parallax}></div>

        <div id="cp-main" className="container">
          <br />
          <div className="row">
            <div className={styles.cpHeader + " col s12"}>
              <h2>Competitive Programming</h2>
            </div>
          </div>
          <div className="row">
            <div className={styles.cpIntroduction + " col s12 l6"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles.contests + " col s12 l6"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default CP;
