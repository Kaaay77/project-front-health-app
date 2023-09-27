import AboutUsCss from "./AboutUsCss.css"
import foto from "../../images/equipo.png"
import logo from "../../images/logo-izerh-02.svg"

export default function AboutUs() {

    return<>
        <div className="imgEquipo">
            <img src={foto} alt="equipo"></img>
            </div>
        
        <div className="imgLogo">
            <img  src={logo} alt="logo"></img>
            <article className="descripcion">
            <p>Laboratorio Izerh, fundado en 1994, está dedicado a la investigación y al procesamiento de diferentes muestras humanas, obteniendo resultados con alta especificidad y confiabilidad. Izerh está conformado por un equipo multidisciplinario de profesionales médicos y bioanalistas entrenados en Venezuela y en el exterior, y algunos con más de 20 años de experiencia, en su área laboral. Entre nuestro personal contamos con andrólogos, bacteriólogos, inmunólogos, magíster en epidemiología, medicos ginecólogos, ocupacionales, dermatólogos y personal  especializado debidamente entrenado para el area de la fertilidad, facilitando el diagnostico oportuno a la pareja infértil, entre otros especialistas del área medica que contribuyen a conformar un equipo de trabajo sólido y completo que logra brindar un excelente servicio al cliente.</p>
            </article>
        </div>
        

    </>
}