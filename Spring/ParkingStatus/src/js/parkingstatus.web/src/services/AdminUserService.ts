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

        if(user != null){
            axios.post(ADMINUSERS_REST_API_URL, user)
            .then((response) => {
                console.log('response: ', response)
                return response;
                
                    
            })
            .catch(error => {
                console.log('error: ', error.response)
                return error.response.status;
                
            });



        }
   
    }

    updateAdminUser(email : string, user: any){

    }

    deleteAdminUser(email : string){

    }







}

export default new AdminUserService();