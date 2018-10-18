import React, { Component } from "react";

class ProjectsControl extends Component {
  constructor() {
    super();
    this.state = {
      selection: "all"
    };
  }
  handleSelection(selection) {
    this.setState({ selection });
  }
  render() {
    let { handleALl, fetchType } = this.props;
    let { selection } = this.state;
    return (
      <div className="projects-control">
        <ul>
          <li
            onClick={() => {
              handleALl();
              this.handleSelection("all");
            }}
            className={selection === "all" ? "active" : ""}
          >
            <p>All</p>
          </li>
          <li
            onClick={() => {
              fetchType("react");
              this.handleSelection("react");
            }}
            className={selection === "react" ? "active" : ""}
          >
            <p>react</p>
          </li>
          <li
            onClick={() => {
              fetchType("angular");
              this.handleSelection("angular");
            }}
            className={selection === "angular" ? "active" : ""}
          >
            <p>angular v1</p>
          </li>
          <li
            onClick={() => {
              fetchType("others");
              this.handleSelection("others");
            }}
            className={selection === "others" ? "active" : ""}
          >
            <p>others</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectsControl;
