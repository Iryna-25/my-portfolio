import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>bblablablalbalblbalablalblablalbalblablalbalblallalalalblabl</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>HTML5 & CSS3 (SASS)</h5>
                                    <p>dhfjdslfhlds</p>
                                </div>
                                <div className="item">
                                    {/* <img src={meter2} alt="Meter2" /> */}
                                    <h5>JavaScript (React.js)</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter3} alt="Meter3" /> */}
                                    <h5>Responsive/Mobile Design</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>Content Management</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>Systems (CMS)/Netlify</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>Testing & Debugging</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>Cross-Browser Development</h5>
                                </div>
                                <div className="item">
                                    {/* <img src={meter1} alt="Meter1" /> */}
                                    <h5>Version Control/Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="BdImage" />
        </section>
    )
}