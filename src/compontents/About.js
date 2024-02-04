import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import about from '../images/portfolioimg.svg'


export const About = () => {

    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={about} alt="About Me" />
                  </div>
              )}
          </TrackVisibility>
                    
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                                <div className="description">   
                                    <h1> About Me.</h1>                                 
                                    <p>Hi, im Giovanni Di Stefano, but you can call me Gianni. I'm based in Italy and i'm a fullstack webdeveloper, with a peculiar passion for front end and UI/UX. I love to bring new ideas to life with the power of development.   </p>
                                </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};