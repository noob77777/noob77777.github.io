import React, { Component } from "react";
import styles from "./contact.module.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "+91 94-- --- --5",
      email: "abhishekpal7@outlook.com",
      form: { name: "", email: "", message: "" },
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      form: { ...this.state.form, name: event.target.value },
    });
  }

  handleChangeEmail(event) {
    this.setState({
      form: { ...this.state.form, email: event.target.value },
    });
  }

  handleChangeMessage(event) {
    this.setState({
      form: { ...this.state.form, message: event.target.value },
    });
  }

  render() {
    return (
      <div className={styles.Contact + " Contact"}>
        <div className={styles.parallax}></div>
        <div id="contact-main" className="container section">
          <br />
          <br />
          <div className="row">
            <div className={styles.myContact + " col s12 l5"}>
              <h2>Get in Touch</h2>
              <div className={styles.contactDiv}>
                <br />
                <i className="material-icons">email</i>
                <p>{this.state.email}</p>
                <br />
                <i className="material-icons">phone</i>{" "}
                <p>{this.state.phone}</p>
                <br />
              </div>
              <br />
            </div>
            <div className="col s12 l5 offset-l2">
              <br />
              <h6>Drop a message for me and I'll get back to you.</h6>
              <br />
              <form>
                <div className="input-field">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    type="text"
                    id="name"
                    onChange={this.handleChangeName}
                    value={this.state.form.name}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <input
                    type="email"
                    id="email"
                    onChange={this.handleChangeEmail}
                    value={this.state.form.email}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">message</i>
                  <textarea
                    id="message"
                    className="materialize-textarea"
                    cols="20"
                    rows="20"
                    onChange={this.handleChangeMessage}
                    value={this.state.form.message}
                  />
                  <label htmlFor="message">Your Message</label>
                </div>
                <div className="input-field center">
                  <button
                    className={styles.findbtn + " btn"}
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Contact;
