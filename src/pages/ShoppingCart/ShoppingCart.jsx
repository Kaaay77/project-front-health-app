import { getCarritoService, deleteCarritoService } from "../../services/carrito.services";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [pruebas, setPruebas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const getUserPruebas = async () => {
    localStorage.getItem("authToken");
    try {
      const response = await getCarritoService();
      console.log(response.data.pruebas);
      setPruebas(response.data.pruebas);
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

      navigate("/carrito");
    } catch (err) {
      if (err.response?.status === 400) {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <>
      {loading && <div className="load">🥲</div>}
      <div id="">
          <h2>{total}</h2>        
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
                      <input type="hidden" name="idPruebas" value={test._id} />
                      <button type="submit">Eliminar</button>
                    </form>
                  </div>
                </div>
            );
        })}
        </div>
      </div>
      <div></div>
    </>
  );
}
