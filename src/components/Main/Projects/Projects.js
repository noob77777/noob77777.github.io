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
                                        src={require("../../../img/project1.jpg")}
                                        alt=""
                                    />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator">
                                        OS-ONE
                                        <i className="material-icons right">
                                            arrow_drop_up
                                        </i>
                                    </span>
                                    <p>
                                        A light weight Operating System for x86
                                        architecture
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a
                                        href="https://github.com/noob77777/os-one"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={styles.link}
                                    >
                                        Link
                                    </a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title">
                                        OS-ONE
                                        <i className="material-icons right">
                                            close
                                        </i>
                                    </span>
                                    <p>
                                        Kernel built from ground up. <br />
                                        Written in C++ and asm for optimal
                                        memory <br />
                                        management.
                                    </p>
                                    <p>
                                        Supports virtual memory and dynamic
                                        memory management. <br />
                                        Device drivers written from scratch.
                                        Comes with a <br />
                                        FAT based filesystem and text editor.
                                    </p>
                                    <p>
                                        A software development suite with a{" "}
                                        <br />
                                        compiler and linking loader in
                                        development.
                                    </p>
                                    <p>
                                        Networking and support for TCP and UDP
                                        to be added
                                        <br />
                                        soon.
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
                                        <i className="material-icons right">
                                            arrow_drop_up
                                        </i>
                                    </span>
                                    <p>
                                        Fast neural networks implementation in
                                        C++
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a
                                        href="https://github.com/noob77777/deep-learning/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={styles.link}
                                    >
                                        Link
                                    </a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title">
                                        Deep Learning in C++
                                        <i className="material-icons right">
                                            close
                                        </i>
                                    </span>
                                    <p>
                                        Fast neural networks implementation in
                                        C++ using x86-64 SIMD instructions.
                                        <br />
                                        Fast optimization using Adam: ADAptive
                                        Moment estimation.
                                    </p>
                                    <p>
                                        Supports custom gradients, loss
                                        functions and activations.
                                    </p>
                                    <p>
                                        Serializable objects to save trained
                                        models.
                                    </p>
                                    <p>Checkout the github repository.</p>
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
