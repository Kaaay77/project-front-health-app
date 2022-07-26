import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import { getPruebasService } from '../../services/pruebas.services';
import {getAddPruebasService} from '../../services/pruebas.services'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import PruebasCss from "./PruebasCss.css"

const API_URL = process.env.REACT_APP_API_URL;

export default function Pruebas() {
	const { user } = useContext(AuthContext);

	const [ loading, setLoading ] = useState(true);
	const [ pruebas, setPruebas ] = useState([]);
    const navigate = useNavigate();
    const [ idPruebas, setIdPruebas ] = useState('') 
    // const [idUser, setIdUser] = useState("");

	// const getAllPruebas = async () => {
	// 	// Send the token through the request "Authorization" Headers
	// 	try {
	// 		const response = await getPruebasService();
	// 		setPruebas(response.data);
	// 		setLoading(false);
	// 	} catch (err) {
    //         console.log(err);
	// 	}
	// };
    // console.log(pruebas)

	// // We set this effect will run only once, after the initial render
	// // by setting the empty dependency array - []
	// useEffect(() => {
	// 	getAllPruebas();
	// }, []);
    useEffect(() => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem('authToken');
        
        // Send the token through the request "Authorization" Headers 
        axios
          .get(
            `${API_URL}/pruebas`,
            { headers: { Authorization: `Bearer ${storedToken}` } }    
          )
          .then((response) => { 
            setPruebas(response.data);
            setLoading(false)
          })
          .catch((error) => console.log(error));
        
      }, []);

      


      const handleSubmit = async (e) => {
        console.log(e.target[0].value)
        const idPruebas = e.target[0].value
		e.preventDefault();
        
		// Create an object representing the request body
		const requestBody = { idPruebas, idUser: user._id};
        try{
        console.log(requestBody)
      await getAddPruebasService(requestBody);
    //   navigate("/pruebas");
    }catch(err){
      if(err.response?.status === 400){
        console.log(err.response.data.message);
	}
}
      };    
    return (<>
        <div clasName="pruebasContainer CC">
            <h1 className='classh1Pruebas'>Pruebas</h1>
                <div>
			{loading && <div className='load'>Loading...</div>}
              <div id='pruebasGird'>
                {!loading && pruebas?.map((test) =>{
                    return(<>
                            <div id="pruebasCard">
                                <h5>{test.title}</h5>
                                <p>{test.description}</p>
                                <div>
                                <b>{test.price}€ 🤑</b>                                
                                <form onSubmit={handleSubmit}>
                                    <input type="hidden" name="idPruebas" value={test._id}  />
                                    <button type="submit">Añade al carrito</button>
                                </form>
                                </div>
                            </div>
                                </>
                            )      
                        })}    
               </div>      
            </div>
        </div>
            
    
    </>
        
    )
}