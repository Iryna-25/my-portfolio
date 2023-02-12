import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "html-coder", "FullStack developer", "Frontend developer"];
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
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1> {`Hi, I'm Iryna `} <span className="wrap"> {text} </span> </h1>
                        <p> BLABLABLABLABLABLABLABLABLABLABLABLA </p>
                        <button onClick={() => console.log('connect')} > Let's connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}