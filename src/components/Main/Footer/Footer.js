import React, { Component } from "react";
import styles from "./footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer + " page-footer Footer"}>
        <div className="container">
          <div className="row">
            <div className={styles.aboutMe + " col l6 s12"}>
              <h5>About Me</h5>
              <p>
                Loves taking on challenges and solving complex problems. Always
                eager to learn new technologies and methodologies.
              </p>
              <p>A fast and willing learner with the ability to self-learn.</p>
            </div>
            <div className={styles.connect + " col l4 offset-l2 s12"}>
              <h5>Connect</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/abhishekpal77777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://codeforces.com/profile/noob77777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codeforces
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhishek-pal-949401181/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/abhishekpal77777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright + " footer-copyright"}>
          <div className="container center-align">
            &copy; 2020 | Abhishek Pal | noob77777
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
