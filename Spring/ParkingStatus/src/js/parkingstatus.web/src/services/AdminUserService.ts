import axios from 'axios';
import React from 'react';

const ADMINUSERS_REST_API_URL : string = 'http://localhost:8080/api/v1/adminusers';

class AdminUserService{

    getAdminUsers(){
        axios.get(ADMINUSERS_REST_API_URL);
    }

    getAdminUserByEmail(email : string){

    }

    createAdminUser(user : any){
        // console.log(user);

        if(user != null){
            axios.post('http://localhost:8080/api/v1/adminusers', user)
            .then(response => console.log(response))
            .catch(error => {
                console.log(error)
            }
            );
        }
   
    }

    updateAdminUser(email : string, user: any){

    }

    deleteAdminUser(email : string){

    }







}

export default new AdminUserService();