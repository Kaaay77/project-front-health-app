import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";  // <== IMPORT
import logo from "../../images/logo-izerh-02.svg"
import "./NavBar.css"
import { FiShoppingCart } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { getCarritoService } from "../../services/carrito.services";
import { useState, useEffect, useContext, useRef } from "react";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const navRef = useRef();
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [totalProducts, setTotalProducts] = useState(0)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiv_nav");
  }

  const getUserPruebas = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getCarritoService();
      setTotalProducts(response.data.pruebas.length)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserPruebas();
  }, []);
  // console.log(user._id)
  return (<>
    <nav className="navContainer">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="imgNav" />
        </Link>
      </div>
      <header  className="divNav"   ref={navRef}>  {/*este es el nav responsiv */}

      <div className="navLinks">
        <div className="links">

          <Link to="/sobre-nosotros" style={{ textDecoration: "none" }}>
            <span onClick={showNavbar}>Sobre Nosotros</span>
          </Link>

          <Link to="/pruebas" style={{ textDecoration: "none" }}>
            <span onClick={showNavbar}>Pruebas</span>
          </Link>

          <div className="shopping">
            <Link to={`/carrito`} style={{ textDecoration: "none" }}>
              <div>
                <h3><FiShoppingCart onClick={showNavbar}/></h3>
              </div>
            </Link>
            {totalProducts !== 0 ?
              (
                <div className="badgeSize">
                  <Badge className="badge">{totalProducts}</Badge>
                </div>

) : (
  <></>
  )}
          </div>
        </div>
        <div className="loged">
          {isLoggedIn
            ? (<>
              <Link to={`/perfil`} style={{ textDecoration: "none" }} >
                <span onClick={showNavbar}>{user.name}</span>
              </Link>
              <Link to={`/perfil`} style={{ textDecoration: "none" }}>
                <button onClick={showNavbar}>Perfil</button>
              </Link>
              <Link to="" style={{ textDecoration: "none" }}>
                <button  onClick={logOutUser}>Logout</button>
              </Link>
            </>)
            :
            (<>
              <Link to="/signup" style={{ textDecoration: "none" }}> <button onClick={showNavbar} style={{ border: "none" }}>Signup</button> </Link>
              <Link to="/login" style={{ textDecoration: "none" }}> <button onClick={showNavbar} style={{ border: "none" }}>Login</button> </Link>
            </>)
          }
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </div>
         </header>    {/* este es el div que cierra el Nav responsive */}
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
    </nav>
  </>
  );
}

export default Navbar;