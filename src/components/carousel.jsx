import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../images/pregnant2.jpeg"
import carousel2 from "../images/seguridad.jpeg"
import carousel3 from "../images/equipo-izerh.jpeg"

import Carouselcss from "./Carouselcss.css"

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="  carusel"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="  carusel"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" carusel"
          src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;