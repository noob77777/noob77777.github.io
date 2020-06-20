import React, { Component } from "react";
import styles from "./home.module.scss";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import CP from "../CP/CP";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Timeline from "../Timeline/Timeline";
import Projects from "../Projects/Projects";
import NotFound from "../NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home + " Home"}>
        <BrowserRouter>
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/">
              <Header />
              <CP />
              <Timeline />
              <Projects />
              <Contact />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Route path="/" component={Footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
