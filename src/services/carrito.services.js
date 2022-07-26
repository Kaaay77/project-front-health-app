import service from './service';
const URL = '/carrito';



const getCarritoService = () => {
    return service.get(`${URL}/api/carrito`);
};

const deleteCarritoService = (user) => {
	return service.post(`${URL}/api/carrito`, user);
};


export {  getCarritoService, deleteCarritoService};
