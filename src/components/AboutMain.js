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
                  <p className="title">Mohammad Maleh</p>
                    <br/>
                  <p className="description">I’m a <span>frontend developer</span> originally from Syria.
                      <br/><br/>
                      Currently living in <span>Istanbul-Turkey</span> And working for one of the most successful financial companies in Turkey <a
                          href="http://www.gk-group.com" target={'self'}>Global Capital</a>.
                      <br/><br/>

                      I enjoy Building Web Applications and learning new technologies .
                      <br/><br/>
                      I try to use my knowledge and my +4 years of experience building frontend applications , to find solutions for my employers to help them meeting there needs,  and  produce the the best quality frontend applications possible.</p>
                </div>
              </Col>
            </Row>
            {/*<img src={myPhoto} alt=""/>*/}
          </div>
        </Col>
        <Col className="stats" sm={12} lg={6} xs={12}>
          <SkillRate name={"JavaScript"} rate={80} color={"yellow"} />
          <SkillRate name={"ReactJS"} rate={65} color={"yellow"} />
          <SkillRate name={"AngularJS"} rate={70} color={"yellow"} />
            <SkillRate name={"HTML"} rate={80} color={"green"} />
            <SkillRate name={"CSS"} rate={80} color={"red"} />
          <SkillRate name={"Sass"} rate={80} color={"red"} />
          <SkillRate name={"Less"} rate={80} color={"red"} />
          <SkillRate name={"Webpack"} rate={70} color={"blue"} />
            <SkillRate name={"Git"} rate={50} color={"blue"} />

            <SkillRate name={"ExpressJS"} rate={40} color={"blue"} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMain;
