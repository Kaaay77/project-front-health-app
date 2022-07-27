import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "../../context/auth.context";  // <== IMPORT
import logo from "../../images/logo-izerh-02.svg"
// eslint-disable-next-line
import NavBar from "./NavBar.css"
import { FiShoppingCart } from 'react-icons/fi';
import Badge from 'react-bootstrap/Badge';
import { getCarritoService } from "../../services/carrito.services";
import { useState, useEffect } from "react";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [totalProducts, setTotalProducts] = useState(0)

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
        <span>Sobre Nosotros</span>
      </Link>

      <Link to="/pruebas" style={{textDecoration: "none"}}>
        <span>Pruebas</span>
      </Link>

      <div className="shopping">
      <Link to={`/carrito`} style={{textDecoration: "none"}}>
        <div>
          <h3><FiShoppingCart/></h3>
        </div>
      </Link>
        {totalProducts !== 0 ? 
        (
        <div className="badgeSize">
        <Badge className="badge">{totalProducts}</Badge> 
        </div>

        ):(
          <></>
        )}
      </div>
      </div>
      <div className="loged">
      {isLoggedIn
        ? (<>
            <Link to={`/perfil`} style={{textDecoration: "none"}}>
            <span>{user.name}</span>
            </Link>
            <Link to={`/perfil`} style={{textDecoration: "none"}}>
              <button>Perfil</button>
            </Link>
            <Link to="" style={{textDecoration: "none"}}>
            <button onClick={logOutUser}>Logout</button>
            </Link>
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