import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signupService } from '../../services/auth.services';
// eslint-disable-next-line
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
        setErrorMessage(err.response.data.message);
	}
}
};

	return (
		<div className="SignupPage">
			<h1 className="classh1">Registrate</h1>

			<form onSubmit={handleSignupSubmit}>
			<div className='form'>
				<div className='contenido'>
					<div>
						<label>Nombre y Apellido:</label>
						{errorMessage ==="" ?
						(
							<input type="text" className='error-input' name="name" value={name} onChange={handleName} />

						):(

							<input type="text" className='formSignup' name="name" value={name} onChange={handleName} />
						)}
					</div>
					<div>
						<label>Telefono:</label>
						{errorMessage ==="" ?
						(
							<input type="text" className='error-input' name="telefono" value={telefono} onChange={handleTelefono} />

						):(
							
							<input type="text" className='formSignup' name="telefono" value={telefono} onChange={handleTelefono} />
						)}
					</div>
					<div>
						<label>DNI:</label>
						{errorMessage ==="" ?
						(
							<input type="text" className='error-input' name="dni" value={dni} onChange={handledni} />

						):(

							<input type="text" className='formSignup' name="dni" value={dni} onChange={handledni} />
						)}
					</div>					
				</div>
				<div className='contenido'>
					<div>
						<label>Email:</label>
						{errorMessage ==="Coloca un email valido" ? 
						(
							<input type="text" className='error-input' name="email" value={email} onChange={handleEmail} />						
							):(
								
								<input type="text" className='formSignup' name="email" value={email} onChange={handleEmail} />
						)
						}
					</div>
					<div>	
						<label>Contraseña:</label>
					   {errorMessage === 'La contraseña debe tener al menos 6 caracteres con al menos un numero, una minúscula y una mayúscula.' ?
					   (
						<input type="password" className='error-input' name="password" value={password} onChange={handlePassword} />
						   
						   ):(
						   <input type="password" className='formSignup' name="password" value={password} onChange={handlePassword} />

					   )
					}
					</div>
					<div> 
						<label>Repetir Contraseña:</label>
						{errorMessage ==="Las contraseñas no coinciden." ? 
						(
							<input type="password"  name="repeatPassword" value={repeatPassword} onChange={handlerepeatPassword} />

						):(

							<input type="password" className='formSignup' name="repeatPassword" value={repeatPassword} onChange={handlerepeatPassword} />
						)}
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
