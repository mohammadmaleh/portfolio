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
                    I believe performance is the most important aspect of web development.
                    <br/><br/>
                    I use methods like Minifying ,image optimisation , code splitting , bundling and chunks.
                    <br/><br/>
                    Using building tools like Webpack and Gulp
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
                <p>Art is one one of my main interests.
                    <br/><br/>
                    and developing beautiful, complex , responsive designs simply makes me proud !
                    <br/><br/>
                    I use Post-css preprocessors like Sass and Less with new CSS technologies like flex-box.</p>
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
                <p> “The Devil in the details”
                    <br/><br/>
                    Minor details and carelessness can cause huge problems for business and makes it harder to maintain the application
                    <br/><br/>
                    to make sure my applications runs as expected, I try my best to apply test cases and linting while developing </p>
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
                <p> I try to keep up with all frontend trends,  like ReactJS , Webpack , Sass.
                    <br/><br/>
                    To keep self growth , and get the most advanced features with the technologies I use
                    <br/><br/>

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
