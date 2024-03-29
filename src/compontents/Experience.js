import React, { useState } from "react";
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import reactImage from '../images/react.png';
import github from '../images/github.png';
import { Tab, Nav } from 'react-bootstrap';
import certificate1 from '../images/htmlcertificate.png'
import certificate2 from '../images/githubcertificate.png'
import certificate3 from '../images/cloudcertificate.png'
import certificate4 from '../images/reactcertificat.png'
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from "../images/portfolioimg.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      backgroundColor: "#E34F26",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      backgroundColor: "#1572B6",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      backgroundColor: "#F0DB4F",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      backgroundColor: "#1572B7",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      backgroundColor: "#00BFFF",
    },
  ];

  const certificates = [
    {
      id: 1,
      src: certificate1,
      title: 'Html, Css, JavaScript Certificate',
      backgroundColor: '#FF5733', // Change this color
    },
    {
      id: 2,
      src: certificate2,
      title: 'GitHub Certificate',
      backgroundColor: '#8A2BE2', // Change this color
    },
    {
      id: 3,
      src: certificate3,
      title: 'Cloud Computing Certificate',
      backgroundColor: '#8A2BE2', // Change this color
    },
    {
      id: 4,
      src: certificate4,
      title: 'React Certificate',
      backgroundColor: '#8A2BE2', // Change this color
    },
  ];

  const projects = [
    {
      id: 1,
      src: 'project1.png',
      title: 'Project 1',
      backgroundColor: '#FF5733', // Change this color
    },
    {
      id: 2,
      src: 'project2.png',
      title: 'Project 2',
      backgroundColor: '#8A2BE2', // Change this color
    },
    
  ];

  const [showTabs, setShowTabs] = useState(false);

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <section id="experience">
    <div className={`bg-gradient ${showTabs ? 'show-tabs' : ''}`}>
      <div className="container mx-auto p-4">
        {!showTabs ? (
          <Container>
          <Row>
            <Col xs={12} md={6} xl={6}>
          <div className="exDiv">
            <h3 className="font-bold text-primary">
              Experience
            </h3> 
            <p>In this section you can view all the projects 
            i've made, all the technologies i've studied or i've worked with
            and also can view all the certificates i've earned during my carreer.</p>
            <button className="exBtn toggle-button" onClick={toggleTabs}>Explore<ArrowRightCircle /> </button>
          </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" />
                  </div>
              )}
          </TrackVisibility>
      </Col>
      </Row>
      </Container>
        ) : (
          <div>
            {/* tabs container */}
            <Tab.Container defaultActiveKey="technologies">
              <Nav variant="tabs" className="tabsName">
                <Nav.Item>
                  <Nav.Link eventKey="technologies" className="exButton" style={{color: '#121212'}}>Technologies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="certificates" className="exButton" style={{color: '#121212'}}>Certificates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="projects" className="exButton" style={{color: '#121212'}}>Projects</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="technologies">
                  <p>These are the technologies I've worked with:</p>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {techs.map(({ id, src, title, backgroundColor }) => (
                      <div key={id} className="col mb-4">
                        <div className="card custom-card" style={{ backgroundColor: "#FFFFFF", boxShadow: `0 4px 8px rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(backgroundColor.slice(5, 7), 16)}, 0.8)` }}>
                          <img src={src} alt={title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="certificates">
                  <p>These are some of the certificates I've earned:</p>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {certificates.map(({ id, src, title, backgroundColor }) => (
                      <div key={id} className="col mb-4">
                        <div className="card custom-card" style={{ backgroundColor: "#FFFFFF", boxShadow: `0 4px 8px rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(backgroundColor.slice(5, 7), 16)}, 0.8)` }}>
                          <img src={src} alt={title} className="cert-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="projects">
                  <p>These are some of the projects I've worked on:</p>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {projects.map(({ id, src, title, backgroundColor }) => (
                      <div key={id} className="col mb-4">
                        <div className="card custom-card" style={{ backgroundColor: "#FFFFFF", boxShadow: `0 4px 8px rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(backgroundColor.slice(5, 7), 16)}, 0.8)` }}>
                          <img src={src} alt={title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            <button className="btn btn-secondary" onClick={toggleTabs}>Go Back</button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Experience;