import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "coder", "frontdev"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }

        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animated__animated animate__bounce" : ""}>
                            <span className="tagline"> Welcome to my Portfolio</span>
                            <h1> {`Hi, I'm Iryna `} <span className="wrap"> {text} </span> </h1>
                            <p> I have more than 1 year of experience in IT, and I have a great desire to try myself as Frontent developer. I am looking for a full-time job in a remote format. During full-stack course,
                            I worked on personal and team projects (I was a developer and SCRUM-master). I have strong knowledge of HTML5 & CSS3 (SASS), JavaScript (React.js) and I worked with Responsive/Mobile Design. </p>
                            <button onClick={() => console.log('connect')} > <a href="#connect"> Let's connect </a>  <ArrowRightCircle size={25}/> </button>
                        </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}