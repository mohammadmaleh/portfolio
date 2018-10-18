import React, { Component } from "react";

class Project extends Component {
  render() {
    let { title, icon, id } = this.props.project;
    let activeModal = this.props.activeModal;
    return (
      <div
        className="project glass"
        onClick={() => {
          activeModal(id);
        }}
      >
        <img className={"icon"} src={icon} alt="" />
        <p className="title">{title}</p>
      </div>
    );
  }
}

export default Project;
