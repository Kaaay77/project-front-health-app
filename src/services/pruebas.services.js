import service from './service';
const URL = '/pruebas';

// const getPruebasService = (user)  => {
//     return service.get(`${URL}/`, user);
// };

const getAddPruebasService = (user) => {
    return service.post(`${URL}/add-pruebas`, user);
};

// const updateService = (user) => {
// 	return service.post(`${URL}`, user);
// };


export { getAddPruebasService };