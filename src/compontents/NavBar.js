import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from '../images/_Gianni .png';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon4 from '../images/nav-icon5.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink ] = useState('home');
    const [ scrolled, seScrolled ] = useState(false);

    useEffect (() => { 
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo}  style={{width: '12rem'}}alt="Logo" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact me</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/giovanni-di-stefano-0b00bb202/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""/> </a>
                    <a href="#home"><img src={navIcon4} alt=""/> </a>
                </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

