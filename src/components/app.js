import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "../containers/Projects";
import "bootstrap";
import "../style/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import Contacts from "./Contacts";

library.add(faStroopwafel);
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Contacts />
      </div>
    );
  }
}
