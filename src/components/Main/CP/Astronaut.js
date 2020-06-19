import React, { Component } from "react";
import styles from "./astronaut.module.scss";

class Astronaut extends Component {
  render() {
    return (
      <div className={styles.astronaut}>
        <div className={styles.backg}>
          <div className={styles.planet}>
            <div className={styles.r1}></div>
            <div className={styles.r2}></div>
            <div className={styles.r3}></div>
            <div className={styles.r4}></div>
            <div className={styles.r5}></div>
            <div className={styles.r6}></div>
            <div className={styles.r7}></div>
            <div className={styles.r8}></div>
            <div className={styles.shad}></div>
          </div>
          <div className={styles.stars}>
            <div className={styles.s1}></div>
            <div className={styles.s2}></div>
            <div className={styles.s3}></div>
            <div className={styles.s4}></div>
            <div className={styles.s5}></div>
            <div className={styles.s6}></div>
          </div>
          <div className={styles.an}>
            <div className={styles.tank}></div>
            <div className={styles.astro}>
              <div className={styles.helmet}>
                <div className={styles.glass}>
                  <div className={styles.shine}></div>
                </div>
              </div>
              <div className={styles.dress}>
                <div className={styles.c}>
                  <div className={styles.btn1}></div>
                  <div className={styles.btn2}></div>
                  <div className={styles.btn3}></div>
                  <div className={styles.btn4}></div>
                </div>
              </div>
              <div className={styles.handl}>
                <div className={styles.handl1}>
                  <div className={styles.glovel}>
                    <div className={styles.thumbl}></div>
                    <div className={styles.b2}></div>
                  </div>
                </div>
              </div>
              <div className={styles.handr}>
                <div className={styles.handr1}>
                  <div className={styles.glover}>
                    <div className={styles.thumbr}></div>
                    <div className={styles.b1}></div>
                  </div>
                </div>
              </div>
              <div className={styles.legl}>
                <div className={styles.bootl1}>
                  <div className={styles.bootl2}></div>
                </div>
              </div>
              <div className={styles.legr}>
                <div className={styles.bootr1}>
                  <div className={styles.bootr2}></div>
                </div>
              </div>
              <div className={styles.pipe}>
                <div className={styles.pipe2}>
                  <div className={styles.pipe3}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Astronaut;
