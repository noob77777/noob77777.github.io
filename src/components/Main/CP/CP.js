import React, { Component } from "react";
import styles from "./cp.module.scss";
import Astronaut from "./Astronaut";
import Achievements from "./Achievements";

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
                    majoring in Computer Science and Engineering (expected 2022)
                    . I am also interning with competitive programming site{" "}
                    <strong>CodeChef, Directi</strong> as a software engineer.
                  </p>
                  <p>
                    I like <strong>Competitive Programming</strong> and have
                    spent most of my time in college on sites like CodeChef and
                    Codeforces. I also like <strong>Web Development</strong> and{" "}
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

        <div className={styles.parallax}></div>

        <div id="cp-main" className="container">
          <br />
          <br />
          <div className="row">
            <div className={styles.cpHeader + " col s12"}>
              <h2>Competitive Programming</h2>
            </div>
          </div>
          <div className="row">
            <div className={styles.cpIntroduction + " col s12 l6"}>
              <p>
                I started with competitive programming in 2018 after my JEE
                exams. I am currently rated <strong>Candidate Master</strong> on
                Codeforces and <strong>6 ★</strong> on CodeChef.
              </p>
              <br />
              <h5>
                Team LongTimeNoShe at <br />
                2019 ASIA AMRITAPURI ONSITE REGIONAL CONTEST
              </h5>
              <div className={styles.icpc}>
                <img
                  src={require("../../../img/icpc.jpg")}
                  alt=""
                  className="responsive-img materialboxed"
                ></img>
              </div>
            </div>
            <div className={styles.contests + " col s12 l6"}>
              <Achievements />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CP;
