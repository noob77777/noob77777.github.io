import React, { Component } from "react";
import styles from "./home.module.scss";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home + " Home"}>
        <Navbar />
        <Header />
        <p>TEST</p>
      </div>
    );
  }
}

export default Home;
