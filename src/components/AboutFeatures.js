import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpaceShuttle,
  faAtom,
  faMicroscope,
  faSearch,
  faPaintBrush
} from "@fortawesome/free-solid-svg-icons";
const AboutFeatures = () => {
  return (
    <div id="about-features">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className="card">
              <div className="card-side card-side-front card-side-front-1">
                <div className="head">
                  <FontAwesomeIcon icon={faSpaceShuttle} />
                </div>
                <div className="body">
                  <p>Performance</p>
                </div>
              </div>

              <div className="card-side card-side-back card-side-back-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aperiam autem consequatur deleniti distinctio est
                  facere harum nemo neque nobis odit quae, quis repudiandae sed
                  soluta tempora tenetur vitae voluptates!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className="card">
              <div className="card-side card-side-front card-side-front-2 ">
                <div className="head">
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className="body">
                  <p>elegent</p>
                </div>
              </div>

              <div className="card-side card-side-back card-side-back-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aperiam autem consequatur deleniti distinctio est
                  facere harum nemo neque nobis odit quae, quis repudiandae sed
                  soluta tempora tenetur vitae voluptates!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className="card">
              <div className="card-side card-side-front card-side-front-3">
                <div className="head">
                  <FontAwesomeIcon icon={faMicroscope} />
                </div>
                <div className="body">
                  <p>Details orineted</p>
                </div>
              </div>

              <div className="card-side card-side-back card-side-back-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aperiam autem consequatur deleniti distinctio est
                  facere harum nemo neque nobis odit quae, quis repudiandae sed
                  soluta tempora tenetur vitae voluptates!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className="card">
              <div className="card-side card-side-front card-side-front-4">
                <div className="head">
                  <FontAwesomeIcon icon={faAtom} />
                </div>
                <div className="body">
                  <p>Modern</p>
                </div>
              </div>

              <div className="card-side card-side-back card-side-back-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam aperiam autem consequatur deleniti distinctio est
                  facere harum nemo neque nobis odit quae, quis repudiandae sed
                  soluta tempora tenetur vitae voluptates!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFeatures;
