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
          <h3>Ayudando a Formar Familias</h3>
          <p>Utilizamos tecnologías de avanzada en reproducción asistida in-vitro, ayu ando a miles de familias a crecer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="  carusel"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Salud para sus Empleados</h3>
          <p>Ayudamos a las empresas a dar el cuidado necesario a la salud de sus empleados, al mismo tiempo dando apoyo en el cumplimiento de LOPCYMAT.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" carusel"
          src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>hola yow</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;