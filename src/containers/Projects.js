import React, { Component } from "react";

import { connect } from "react-redux";
import ProjectModal from "../components/ProjectModal";
import ProjectsControl from "../components/ProjectsControl";
import { bindActionCreators } from "redux";
import { fetchType, fetchAll } from "../actions/index";
import Project from "../components/Project";
import { CSSTransitionGroup } from "react-transition-group";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.activeModal = this.activeModal.bind(this);
    this.handleALl = this.handleALl.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.fetchType = this.fetchType.bind(this);
    this.prevProject = this.prevProject.bind(this);
  }
  activeModal(id) {
    this.setState({
      modal: !this.state.modal,
      activeProject: this.props.projects.find(project => project.id === id)
    });
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  nextProject(id) {
    this.setState({
      activeProject: this.props.projects.find(project => project.id === id + 1)
        ? this.props.projects.find(project => project.id === id + 1)
        : this.props.projects[0]
    });
  }
  prevProject(id) {
    this.setState({
      activeProject: this.props.projects.find(project => project.id === id - 1)
        ? this.props.projects.find(project => project.id === id - 1)
        : this.props.projects[this.props.projects.length - 1]
    });
  }
  handleALl() {
    this.props.fetchAll();
  }
  fetchType(type) {
    this.props.fetchType(type);
  }

  render() {
    let { activeProject, modal } = this.state;
    return (
      <div id="projects">
        <div className="container">
          <h3 className={"section-header green"}>projects</h3>

          <ProjectsControl
            fetchType={this.fetchType}
            handleALl={this.handleALl}
          />

          <div className="projects-container">
            <CSSTransitionGroup
              timeout={500}
              transitionName="move"
              transitionEnterTimeout={2}
              transitionLeaveTimeout={1}
            >
              {this.props.projects.map(project => (
                <Project
                  key={project.id}
                  project={project}
                  activeModal={this.activeModal}
                />
              ))}
            </CSSTransitionGroup>
          </div>
        </div>

        <ProjectModal
          project={activeProject}
          toggleModal={this.toggleModal}
          nextProject={this.nextProject}
          prevProject={this.prevProject}
          modal={modal}
        />
      </div>
    );
  }
}

function mapStateToProps({ projects } = state) {
  return { projects };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchType, fetchAll }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
