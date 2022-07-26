import service from './service';
const URL = '/profile';


const getProfileService = (user)  => {
    return service.get(`${URL}/api/profile`, user);
};

const updateService = (user) => {
	return service.post(`${URL}/api/profile`, user);
};


export {updateService, getProfileService};