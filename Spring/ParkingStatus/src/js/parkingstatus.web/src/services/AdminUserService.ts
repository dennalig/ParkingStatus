import axios from 'axios';

const ADMINUSERS_REST_API_URL : string = 'http://localhost:8080/api/v1/adminusers';

class AdminUserService{

    getAdminUsers(){
        axios.get(ADMINUSERS_REST_API_URL);
    }

    getAdminUserOfEmail(inputEmail : string){

    }

    inputEmailIsValid(inputEmail: string){

    return false;
    }

    inputPasswordIsValid(inputPassword: string){
        return false;
    }



}

export default new AdminUserService();