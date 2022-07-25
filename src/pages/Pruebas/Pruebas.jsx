import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getPruebasService } from '../../services/pruebas.services';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

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

      const handleId = (e) => setIdPruebas(e.target.value);


      const handleSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { idPruebas, idUser: user._id};
        try{
        console.log(requestBody)
      await getPruebasService(requestBody);
      navigate("/pruebas");
    }catch(err){
      if(err.response?.status === 400){
        console.log(err.response.data.message);
	}
}
      };    
    return (<>
        <div>
            <h1>Pruebas</h1>
                <div>
			{loading && <div>Loading...</div>}
                    
                {!loading && pruebas?.map((test) =>{
                            return(<>
                            <div >
                                <h5>{test.title}</h5>
                                <p>{test.description}</p>
                                <p>{test.price}€ 🤑</p>
                                <form onChange={handleSubmit}>
                                    <input type="hidden" name="id" value={test._id} onChange={handleId} />
                                    <button type="submit">Añadete coño</button>
                                </form>
                            </div>
                                </>
                            )      
                            })}    
            </div>
        </div>
            
    
    </>
        
    )
}