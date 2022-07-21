import equipo from "../images/equipo-izerh.jpeg"
import {Link} from "react-router-dom"
import dermatologia from "../images/Dermatología-nuevo.svg"
import fertilidad from "../images/Fertilidad.svg"
import laboratorioClinico from "../images/Laboratorio-clinico.svg"
import ocupacional from "../images/Ocupacional.svg"
import HomePageCss from "./HomePage.css"
import  Carousel  from "../components/carousel"
// import TwitterIcon from "../components/TwitterIcon"


function HomePage() {
  return (
    <>
      <div className="header">      
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
        <Link to="/laboratorio" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Laboratorio</button> </Link>
        
        </section>

        <section className="carta">
        <div>
          <img src={ocupacional} alt="ocupacional"/>
        </div>
          <p>Ayudamos a las empresas a ofrecer el cuidado necesario que sus empleados merecen, dando apoyo para el cumplimiento de LOPCYMAT.</p>
          <Link to="/ocupacional" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Ocupacional</button> </Link>
        </section>

        <section className="carta">
          <div>
            <img src={fertilidad} alt="fertilidad"/>
          </div>
          <p>Utilizamos tecnologías de avanzada para la reproducción asistida in-vitro, ayudando a miles de familias a crecer y formar nuevas vidas.</p>
        <Link to="/fertilidad" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Fertilidad</button> </Link>

        </section>
        
        <section className="carta">
          <div>
            <img src={dermatologia} alt="dermatologia"/>
          </div>
            <p>Contamos con equipos de fototerapia y dermatólogos para el tratamiento de afecciones de la piel como el vitiligo y la psoriasis, entre otras.</p>
            <Link to="/dermatologia" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Dermatologia</button> </Link>
            
        </section>
      </div>
      </div>
    </>
  );
}

export default HomePage;