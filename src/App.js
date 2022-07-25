import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute';
import Footer from "./components/Footer/Footer" 
import Profile from './pages/Perfil/Perfil';
import Pruebas from "./pages/Pruebas/Pruebas"

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route exact path="/" element={<HomePage/>} />
				{/* <Route
						exact
						path="/sobre-nosotros"
						element={
							<PrivateRoute>
								<AboutUs />
							</PrivateRoute>
						}
					/> */}

				{/* <Route
					exact
					path="carrito"
					element={
						<PrivateRoute>
							<Basket />
						</PrivateRoute>
					}
				/> */}
				<Route
					exact
					path="/perfil"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				
				<Route
					exact
					path="/pruebas"
					element={
						<PrivateRoute>
							<Pruebas />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
