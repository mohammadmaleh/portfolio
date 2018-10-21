import React from "react";
import { Row, Container, Col } from "reactstrap";
import SkillRate from "./SkillRate";
// import myPhoto from '../assets/images/myphoto.jpg'
const AboutMain = () => {
  return (
    <Container id="about-main">
      <Row>
        <Col sm={12} lg={6} xs={12}>
          <div className="personal-information">
            <Row>
              <Col sm={12} lg={3} xs={12}>
                <div className="my-image" />
              </Col>
              <Col sm={12} lg={9} xs={12}>
                <div className="description">
                  <p className="title">Who's this guy?</p>
                  <p className="description">
                    I'm the Front-End Developsdasdasdaser asdasdasdfor EyeCue
                    Lab in Portland, OR. I hsdasdasdasave serdsadasdious
                    passidsadsadon for UI effects, animations ansdasd creating
                    intuitive, dynamic user experiences.{" "}
                  </p>
                </div>
              </Col>
            </Row>
            {/*<img src={myPhoto} alt=""/>*/}
          </div>
        </Col>
        <Col className="stats" sm={12} lg={6} xs={12}>
          <SkillRate name={"Javascript"} rate={80} color={"green"} />
          <SkillRate name={"css"} rate={50} color={"orange"} />
          <SkillRate name={"ReactJS"} rate={20} color={"blue"} />
          {/*<SkillRate name={'css'} rate={80}/>*/}
          {/*<SkillRate name={'css'} rate={80}/>*/}
          {/*<SkillRate name={'css'} rate={80}/>*/}
          {/*<SkillRate name={'css'} rate={80}/>*/}
          {/*<SkillRate name={'css'} rate={80}/>*/}
          {/*<SkillRate name={'css'} rate={80}/>*/}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMain;
