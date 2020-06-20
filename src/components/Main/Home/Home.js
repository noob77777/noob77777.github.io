import React, { Component } from "react";
import styles from "./home.module.scss";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import CP from "../CP/CP";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Timeline from "../Timeline/Timeline";
import Projects from "../Projects/Projects";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home + " Home"}>
        <Navbar />
        <Header />
        <CP />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
