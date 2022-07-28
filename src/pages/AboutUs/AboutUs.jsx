import AboutUsCss from "./AboutUsCss.css"
import foto from "../../images/equipo.png"
import logo from "../../images/logo-izerh-02.svg"

export default function AboutUs() {

    return<>
        <div className="imgEquipo"><img src={foto} alt="equipo"></img></div>
        <div className=""><img src={logo} alt="logo"></img></div>
        
    </>
}