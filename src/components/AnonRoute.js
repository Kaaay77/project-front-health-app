import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function AnonRoute(props) {
	const { isLoggedIn, isLoading } = useContext(AuthContext);

	// If the authentication is still loading ⏳
	if (isLoading) return <Spinner/>;

	// If the user is already logged in, redirect him to home page
	if (isLoggedIn) return <Navigate to="/" replace />;

	// If the user is not logged in yet, allow him to see the page
	return props.children;
}

export default AnonRoute;
