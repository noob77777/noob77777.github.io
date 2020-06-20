import React, { Component } from "react";
import styles from "./achievements.module.scss";

class Achievements extends Component {
  render() {
    return (
      <div className={styles.main}>
        <p>
          <strong>Indian Institute of Technology Bombay</strong>
          <br /> TechFest Regionals, Winner (2019)
        </p>
        <p>
          <strong>Jadavpur University</strong>
          <br /> Pass the Baton, Winner (2020)
          <br /> Sherlocked, Winner (2020)
          <br /> H42, Runner's Up (2020)
          <br /> Algomaniac Finals, Runner's Up (2020)
          <br /> H42, 2nd Runner's Up (2019)
          <br /> Pass the Baton, Runner's Up (2019)
        </p>
        <p>
          <strong>IIEST Shibpur</strong>
          <br /> OdeToCode, Winner (2019)
        </p>
        <p>
          <strong>UEM, Kolkata</strong>
          <br /> CodeRanch, Winner (2020)
          <br /> CodeGolf, Winner (2020)
          <br /> Debugger, Winner (2020)
        </p>
        <p>
          <strong>IEM, Kolkata</strong>
          <br /> IEMCO, 2nd Runner's Up (2020)
        </p>
        <p>
          <strong>Amity University</strong>
          <br /> BleedCode, Winner (2020)
        </p>
        <p>
          <strong>Netaji Subhash Engineering College, Kolkata</strong>
          <br /> Debugger, Winner (2020)
          <br /> Encoding, 2nd Runner's Up (2020)
        </p>
        <p>
          <strong>Heritage Institute of Technology, Kolkata</strong>
          <br /> Precision, Winner (2019)
          <br /> Mutex, Winner (2019)
        </p>
      </div>
    );
  }
}

export default Achievements;
