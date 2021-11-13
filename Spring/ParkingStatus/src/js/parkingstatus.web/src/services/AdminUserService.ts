import axios  from 'axios';
import React from 'react';

const ADMINUSERS_REST_API_URL : string = 'http://localhost:8080/api/v1/adminusers';

class AdminUserService{

    getAdminUsers(){
        axios.get(ADMINUSERS_REST_API_URL);
    }

    getAdminUserByEmail(email : string){

    }

    async createAdminUser(user : any){
        console.log(user);


           return axios.post(ADMINUSERS_REST_API_URL, user);

   
    }

    updateAdminUser(email : string, user: any){

    }

    deleteAdminUser(email : string){

    }







}

export default new AdminUserService();