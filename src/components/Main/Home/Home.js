import React, { Component } from "react";
import styles from "./home.module.scss";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home + " Home"}>
        <Navbar />
        <Header />
        <p id="second-banner"></p>
        <Footer />
      </div>
    );
  }
}

export default Home;
