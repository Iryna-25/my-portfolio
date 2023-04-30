import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../assets/img/html-css-js.jpg";
import pic2 from "../assets/img/react.png";
import pic3 from "../assets/img/design.jpg";
import pic4 from "../assets/img/netlify.png";
import pic5 from "../assets/img/git.png";
import pic6 from "../assets/img/browsers.jpg";
import pic7 from "../assets/img/bugs.png";
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
                            {/* <p>bblablablalbalblbalablalblablalbalblablalbalblallalalalblabl</p> */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>HTML5 & CSS3 & JS</h5>
                                    <img src={pic1} alt="html-css-js"/>
                                </div>
                                <div className="item">
                                    <h5>React.js</h5>
                                    <img src={pic2} alt="React"  />
                                </div>
                                <div className="item">
                                    <h5>Responsive/Adaptive</h5>
                                    <img src={pic3} alt="Design" />
                                </div>
                                <div className="item">
                                    <h5>CMS/Netlify</h5>
                                    <img src={pic4} alt="Netlify" />
                                </div>                                
                                <div className="item">
                                    <h5>VCS/Git</h5>
                                    <img src={pic5} alt="Git" />
                                </div>                                
                                <div className="item">
                                    <h5>Cross-Browser Development</h5>
                                    <img src={pic6} alt="Browsers" />
                                </div>
                                <div className="item">
                                    <h5>Testing & Debugging</h5>
                                    <img src={pic7} alt="Bugs" />
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