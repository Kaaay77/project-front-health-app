import service from './service';
const URL = '/pruebas';

const getPruebasService = (user)  => {
    return service.get(`${URL}/`, user);
};

const updateService = (user) => {
	return service.post(`${URL}`, user);
};


export {getPruebasService};