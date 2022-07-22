import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { loginService } from '../../services/auth.services';
import LoginCss from "./LoginCss.css"

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);
	const navigate = useNavigate();
	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		try {
			const response = await loginService(requestBody);
			
			const token = response.data.authToken;
			logInUser(token);
			navigate('/');
		} catch (err) {
			const errorDescription = err?.response?.data?.message;
			setErrorMessage(errorDescription);
		}
	};
	console.log(errorMessage);

	return (
		<div className="loginPage">
			<h1>Login</h1>
			<div>
			<form onSubmit={handleLoginSubmit} className='contenidoLog'>
				<div >
					<label>Email:</label>
					{errorMessage === 'El usuario ya existe' || (errorMessage === 'Rellena todos los campos' && !email.length) ?
					(
						<input type="text" className='error-input' name="email" value={email} onChange={handleEmail} />
						):(
							<input type="text" className='formLogin' name="email" value={email} onChange={handleEmail} />
					)}

					<label>Contraseña:</label>
					{errorMessage === 'Contraseña incorrecta' || (errorMessage === 'Rellena todos los campos' && !password.length)  ? 
					(
						<input type="password" className='error-input' name="password" value={password} onChange={handlePassword} />
						):(
							<input type="password" className='formLogin' name="password" value={password} onChange={handlePassword} />
					)}
				</div>

				<button type="submit">Login</button>
			</form>
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>Si no tienes cuenta registrate 👇🏼 </p>
			<Link to={'/signup'}>Registrarse</Link>
			</div>
		</div>
	);
}

export default LoginPage;
