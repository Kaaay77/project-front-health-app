import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import logo from "../images/logo-izerh-02.svg"
import NavBar from "./NavBar.css"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navContainer">
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="imgNav"/>
      </Link>
    </div>
    <div className="navLinks">
      <div className="links">

      <Link to="/sobre-nosotros" style={{textDecoration: "none"}}>
        <b>Sobre Nosotros</b>
      </Link>

      <Link to="/servicios" style={{textDecoration: "none"}}>
        <b>Servicios</b>
      </Link>

      <Link to="/carrito" style={{textDecoration: "none"}}>
        🛒
      </Link>
      </div>
      <div className="loged">
      {isLoggedIn
        ? (<>
            <span>{user.name}</span>
            <Link to="/perfil" style={{textDecoration: "none"}}>
              <button>Perfil</button>
            </Link>
            
            <button onClick={logOutUser}>Logout</button>
          </>)
        : 
        (<>
          <Link to="/signup" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Signup</button> </Link>
          <Link to="/login" style={{textDecoration: "none"}}> <button style={{border: "none"}}>Login</button> </Link>
        </>)
      }
      </div>
      </div>
    </nav>
  );
}

export default Navbar;