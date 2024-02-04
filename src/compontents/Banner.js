import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("Web Developer");
    const [delta] = useState(300 - Math.random() * 100);
    
    useEffect(() => {
        const toRotate = ["Web Developer", "Software Engineer"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        
        const tick = () => {
            if (isDeleting) {
                setText((prevText) => prevText.slice(0, -1));
            } else {
                setText((prevText) => fullText.substring(0, prevText.length + 1));
            }
    
            if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prevLoopNum) => prevLoopNum + 1);
            } else if (!isDeleting && text === fullText) {
                setIsDeleting(true);
            }
        };
    
        let ticker = setInterval(tick, delta);
    
        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, isDeleting, loopNum]); 

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Gianni `}<br/><span className="txt-rotate bannerFontColor" dataPeriod="1000" data-rotate='[ "Web Developer" , "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>im a sofrenio nfiwoenfwf wiofw neiofqwsas a lkefnwle fe ofpw fdsf sfpew
                                        fweopf wfpo wj fwp wdòfl? f wopf ?
                                        fwopf jwpf w? fwoejpfwfj pw aopsdsopad
                                        sdopvsop </p>
                                        <br/> <br/> <br/> <br/>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};