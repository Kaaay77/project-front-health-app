import { getCarritoService, deleteCarritoService, buyCarritoService } from "../../services/carrito.services";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import travoltaGif from "../../images/pulpfiction-john-travolta.gif"
import Spinner from 'react-bootstrap/Spinner';
// eslint-disable-next-line
import ShoppingCartCss from "./ShoppingCart.css";


export default function ShoppingCart() {
  const { user } = useContext(AuthContext);
// eslint-disable-next-line
  const navigate = useNavigate();
  const [travolta, setTravolta] = useState('')
  const [pruebas, setPruebas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const [refresh, setRefresh] = useState(false)



  const getUserPruebas = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getCarritoService();
      console.log(response.data.pruebas);
      //puede ir un for para la cantidad
      setPruebas(response.data.pruebas);
      setTotalProducts(response.data.pruebas.length);
      setTravolta(travoltaGif)
      setLoading(false);
      
      const result = response.data.pruebas.reduce(
        (total, currentValue) => (total = total + currentValue.price),
        0
      );
      console.log(result);
      setTotal(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserPruebas();
  }, []);

  const handleSubmit = async (e) => {
    const idPruebas = e.target[0].value;
    e.preventDefault();

    // eliminar tarjeta
    const requestBody = { idPruebas, idUser: user._id };
    try {
      console.log(requestBody);
      await deleteCarritoService(requestBody);
       window.location.reload(false);
      //ideal hacer un filter a la variable de estado e identificar la variable, y hacer el set con el array filtrado.
      //navigate("/carrito");
    } catch (err) {
      if (err.response?.status === 400) {
        console.log(err.response.data.message);
      }
    }
  };

  const handleBuySubmit = async (e) => {
    e.preventDefault();

    // eliminar tarjeta
    const requestBody = { idUser: user._id };
    try {
      await buyCarritoService(requestBody);
      console.log('este es ',requestBody)
      // navigate("/");
      // alert("gracias por tu compra");

       window.location.reload(false);
      //ideal hacer un filter a la variable de estado e identificar la variable, y hacer el set con el array filtrado.
    } catch (err) {
      if (err.response?.status === 400) {
        console.log(err.response.data.message);
      }
    }
  };
  

  return (
    <>
      {loading && <div className="load"><Spinner animation="border" variant="info" /></div>}
      <div id="page">
        <div className="totalDiv">
          <h5>Productos en la cesta: {totalProducts}</h5>
          <h7>Total:{total}€ </h7>
          <form onSubmit={handleBuySubmit}>
            <button>Comprar</button>
          </form>
        </div>
        <div className="contenedorP">

          <div id="pruebasGird">
            {!loading &&
              pruebas?.map((test) => {
                return (
                  <div id="pruebasCard" key={test._id}>
                    <h5>{test.title}</h5>
                    <p>{test.description}</p>
                    <div>
                      <p>
                        <b>{test.price}€ 🤑</b>
                      </p>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="hidden"
                          name="idPruebas"
                          value={test._id}
                        />
                        <button type="submit">Eliminar</button>
                      </form>
                    </div>
                  </div>
                );
              })}
              {(pruebas.length === 0) &&
              <>
{               // eslint-disable-next-line
}                <img src={travolta}/> 
              </>
              }
          </div>
        </div>
      </div>
    </>
  );
}
