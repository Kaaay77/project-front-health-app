import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 

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
					path="/servicios"
					element={
						<PrivateRoute>
							<Services />
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
				{/* <Route
					exact
					path="perfil"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/> */}
				
				<Route
					exact
					path="/projects/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
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
		</div>
	);
}

export default App;
