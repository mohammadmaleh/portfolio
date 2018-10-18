import React from "react";
import ImageGallery from "react-image-gallery";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";
const ProjectModal = props => {
  let { modal, toggleModal, project } = props;
  const images = [
    {
      original: "http://lorempixel.com/1000/600/nature/1/",
      thumbnail: "http://lorempixel.com/250/150/nature/1/"
    },
    {
      original: "http://lorempixel.com/1000/600/nature/2/",
      thumbnail: "http://lorempixel.com/250/150/nature/2/"
    },
    {
      original: "http://lorempixel.com/1000/600/nature/3/",
      thumbnail: "http://lorempixel.com/250/150/nature/3/"
    }
  ];
  let sliderImages = [];
  if (project) {
    sliderImages = project.screenShots.reduce(
      (array, screenshot) =>
        array.concat({
          original: screenshot,
          thumbnail: screenshot
        }),
      []
    );
  }

  return (
    <div>
      {project ? (
        <Modal isOpen={modal} toggle={toggleModal} size={"lg"}>
          <ModalHeader>
            <a href={project.link ? project.link : "#"}>{project.title}</a>
          </ModalHeader>
          <ModalBody>
            <ImageGallery items={sliderImages} />
            <div className={"project-description"}>
              <Row>
                <Col md={6} sm={12} xs={12} lg={6} xl={6}>
                  <div className={"project-description-fields"}>
                    <Row>
                      <Col>
                        {" "}
                        <label>Name</label>
                        <a href={project.link ? project.link : "#"}>
                          {project.title}
                        </a>
                      </Col>
                      <Col>
                        {" "}
                        <label>Year</label>
                        <p>{project.year}</p>
                      </Col>
                    </Row>

                    <label>Employer</label>
                    <p>{project.company}</p>
                    <label>descriptopm</label>
                    <p>{project.description}</p>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={12} lg={6} xl={6}>
                  <div className={"stack"}>
                    <label>Stack</label>
                    <div className={"stack-container"}>
                      {project.stack.map((stack, index) => (
                        <div key={index} className={"stack-item"}>
                          <p>{stack}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
              <div className={"highlights"}>
                <label>Highlights</label>
                {project.highlights.map((highlight, index) => (
                  <p className={"highlight"} key={index}>
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Back
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ProjectModal;
