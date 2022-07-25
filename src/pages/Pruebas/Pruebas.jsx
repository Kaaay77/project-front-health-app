import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export default function Pruebas() {
	const [ loading, setLoading ] = useState(true);
	const [ pruebas, setPruebas ] = useState([]);


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


console.log(pruebas)
    
    return (<>
        <div>
            <h1>Pruebas</h1>
                <div>
			{loading && <div>Loading...</div>}
                    
                {!loading && pruebas?.map((test) =>{
                            return(<>
                                <h5>{test.title}</h5>
                                <p>{test.description}</p>
                                <p>{test.price}</p>
                                <form action="submit">
                                    <button>Añadete coño</button>
                                </form>
                                </>
                            )      
                            })}    
            </div>
        </div>
            
    
    </>
        
    )
}