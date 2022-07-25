import service from './service';
const URL = '/profile';


const getProfileService = (user)  => {
    return service.get(`${URL}`, user);
};

const updateService = (user) => {
	return service.post(`${URL}`, user);
};


export {updateService, getProfileService};