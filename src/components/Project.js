import React, { Component } from "react";

class Project extends Component {
  render() {
    let { title, icon, id ,bgColor} = this.props.project;
    let activeModal = this.props.activeModal;
    return (
      <div
        className="project"
        onClick={() => {
          activeModal(id);
        }}
      >
        <div className={`image-container ${bgColor}`}>
          <img className={"icon"} src={icon} alt="" />
        </div>
        <div className={"title-container"}>
          <p className="title">{title}</p>
        </div>
      </div>
    );
  }
}

export default Project;
