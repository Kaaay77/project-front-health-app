import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signupService } from '../../services/auth.services';
import SignupPagecss from "./SignupPage.css";


function SignupPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [dni, setDni] = useState('');
	const [telefono, setTelefono] = useState('')
  	const navigate = useNavigate();
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);
	const handlerepeatPassword = (e) => setRepeatPassword(e.target.value);
	const handledni = (e) => setDni(e.target.value)
	const handleTelefono = (e) => setTelefono(e.target.value)

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name, repeatPassword, dni, telefono };
    try{
      await signupService(requestBody);
      navigate("/login");
    }catch(err){
      if(err.response?.status === 400){
        setErrorMessage(err.response.data.errorMessage);
        console.log(errorMessage);
      }
    }
  };

	return (
		<div className="SignupPage">
			<h1>Registrate</h1>

			<form onSubmit={handleSignupSubmit}>
			<div className='form'>
				<div className='contenido'>
					<div>
						<label>Nombre y Apellido:</label>
						<input type="text" name="name" value={name} onChange={handleName} />
					</div>
					<div>
						<label>Telefono:</label>
						<input type="text" name="telefono" value={telefono} onChange={handleTelefono} />
					</div>
					<div>
						<label>DNI:</label>
						<input type="text" name="dni" value={dni} onChange={handledni} />
					</div>					
				</div>
				<div className='contenido'>
					<div>
						<label>Email:</label>
						<input type="text" name="email" value={email} onChange={handleEmail} />
					</div>
					<div>	
						<label>Contraseña:</label>
						<input type="password" name="password" value={password} onChange={handlePassword} />
					</div>
					<div> 
						<label>Repetir Contraseña:</label>
						<input type="text" name="repeatPassword" value={repeatPassword} onChange={handlerepeatPassword} />
					</div>
				</div>
			</div>

				<button type="submit">Sign Up</button>
			</form>

			{errorMessage && <p className="error-message">{errorMessage}</p>}
		
			<p className='ptext'>Si ya tienes cuenta 👇🏼 </p>
			
			<Link to={'/login'}> Login</Link>
		</div>
	);
}

export default SignupPage;
