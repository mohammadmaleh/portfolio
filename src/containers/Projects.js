// import React, { Component } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter
// } from "reactstrap";
// import SectionHeader from "./SectionHeader";
// import Project from "./Project";
//
//
// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       activeProject: null
//     };
//
//     this.activeModal = this.activeModal.bind(this);
//     this.toggleModal = this.toggleModal.bind(this);
//   }
//
//   renderProjects() {
//     return projectsList.map(project => {
//       console.log(project);
//       return (
//         <Col xs={12} lg={4} md={4} key={project.id}>
//           <Project
//             title={project.title}
//             icon={project.icon}
//             activeModal={this.activeModal}
//           />
//         </Col>
//       );
//     });
//   }
//   activeModal(id) {
//     this.setState({
//       modal: !this.state.modal,
//       activeProject: projectsList.filter(projectsList => {})
//     });
//   }
//   toggleModal() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }
//   render() {
//     return (
//       <Container className="section">
//         <SectionHeader title={"projects"} />
//         <div className="projectsContainer">
//           <Row>{this.renderProjects()}</Row>
//         </div>
//         <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
//           <ModalHeader>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="secondary" onClick={this.toggleModal}>
//               Back
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </Container>
//     );
//   }
// }
//
// export default Projects;

import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectModal from "../components/ProjectModal";
import ProjectsControl from "../components/ProjectsControl";
import { bindActionCreators } from "redux";
import { fetchType, fetchAll } from "../actions/index";
import Project from "../components/Project";
import SectionHeader from "../components/SectionHeader";
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
    this.fetchType = this.fetchType.bind(this);
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
          <SectionHeader title="Projects" />

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
