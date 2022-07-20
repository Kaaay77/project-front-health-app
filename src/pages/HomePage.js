import equipo from "../images/equipo-izerh.jpeg"
import {Link} from "react-router-dom"
import dermatologia from "../images/Dermatología-nuevo.svg"
import fertilidad from "../images/Fertilidad.svg"
import laboratorioClinico from "../images/Laboratorio-clinico.svg"
import ocupacional from "../images/Ocupacional.svg"
import HomePageCss from "./HomePage.css"
import  Carousel  from "../components/carousel"


function HomePage() {
  return (
    <>
      <div className="header">
      <h1>Holi</h1>
      </div>
      <div className="caruselhome">
      <Carousel />
      </div>

      

      <div className="servicios">
        <h4>Nuestros Servicios</h4>
        <div className="barra">
        </div>
        <div className="grid-container">

        <section className="carta">
        
        <div>
          <img src={laboratorioClinico} alt="laboratorioClinico" />
        </div>
          <p>Contamos con equipos de última generación y personal capacitado para la realización de exámenes de rutina y pruebas especializadas</p>
        <button>Laboratorio</button>
        
        </section>

        <section className="carta">
        <div>
          <img src={ocupacional} alt="ocupacional"/>
        </div>
          <p>Ayudamos a las empresas a ofrecer el cuidado necesario que sus empleados merecen, dando apoyo para el cumplimiento de LOPCYMAT.</p>
          <button>Ocupacional</button>
        </section>

        <section className="carta">
          <div>
            <img src={fertilidad} alt="fertilidad"/>
          </div>
          <p>Utilizamos tecnologías de avanzada para la reproducción asistida in-vitro, ayudando a miles de familias a crecer y formar nuevas vidas.</p>
          <button>Fertilidad</button>
        </section>
        
        <section className="carta">
          <div>
            <img src={dermatologia} alt="dermatologia"/>
          </div>
            <p>Contamos con equipos de fototerapia y dermatólogos para el tratamiento de afecciones de la piel como el vitiligo y la psoriasis, entre otras.</p>
            <button>Dermatologia</button>
        </section>
      </div>
        
      </div>
    </>
  );
}

export default HomePage;