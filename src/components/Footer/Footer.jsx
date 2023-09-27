import logo from "../../images/logo-izerh-02.svg"
// eslint-disable-next-line
import Footercss from "./Footer.css"
import Social from "../Social"




export default function Footer() {
    return(
        <>
        <section className="Container">
            <section className="section1">

                <div className="boxContent">
                        <div className="content">
                            <h4>Dirección</h4>
                            <p>Calle 76 entre Avenidas 3H y 3Y (San Martín),<br/> Edifico Villa Ota, Planta Baja<br/> Maracaibo, Venezuela.</p>
                            
                        </div>

                        <div className="content">
                            <h4>Contacto</h4>
                            <p>(+58) 0261-7156906</p>
                            <p>(+58) 0261-7156990</p>
                            <p>(+58) 0424-6210734</p>
                            <a href="mailto:informacion@izerh.net" className="email">informacion@izerh.net</a>
                        </div>
                </div>
                <div className="boxContent">
                        <div className="content">
                            <h4>Horarios de Atención</h4> 
                            <p>Lunes a Viernes: 7:00 am a 5:00 pm</p>
                            <p>Sábados: 8:00 am a 12:00 pm</p>            
                        </div>

                        <div className="content">
                            <h4>Más</h4>
                            <p>Recomendaciones</p>
                            <p>Covid-19</p>
                            <p>Blog</p>
                            <br/>
                        </div>
                </div>
            </section>

            <section className="section2">
            <img src={logo} alt="logo" className="imgFooter"/>
            <Social/>
            </section>
        
        </section>
        
        </>
    )
}