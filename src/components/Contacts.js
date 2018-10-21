import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Contacts extends Component {
  render() {
    return (
      <div id={"contacts"}>
        <div className={"contacts-container"}>
          <h1 className="section-header">Get in touch</h1>
          <div className="description">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, please feel free to contact me throw one of the
            following
          </div>
          <div className="contact">
            <label htmlFor="">Email :</label>
            <p>mohammad.maleh@gmail</p>
          </div>
          <div className="contact">
            <label htmlFor="">Phone Number :</label>
            <p>+90 507 099 0448</p>
          </div>
          <div className={"social"}>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
