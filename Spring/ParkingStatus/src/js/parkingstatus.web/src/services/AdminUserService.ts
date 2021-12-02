import axios  from 'axios';
import React from 'react';

const ADMINUSERS_REST_API_URL : string = 'http://localhost:8080/api/v1/adminusers';

class AdminUserService{

    async getAdminUsers(){
        axios.get(ADMINUSERS_REST_API_URL);
    }

    async getAdminUserByEmail(email : string){
        return axios.get(ADMINUSERS_REST_API_URL +'/'+email);
    }

    async createAdminUser(user : any){
        console.log(user);
           return axios.post(ADMINUSERS_REST_API_URL, user);

   
    }

    async updateAdminUser(email : string, user: any){

    }

    async deleteAdminUser(email : string){

    }

    async validateLoginAttempt(enteredEmail: string, enteredPassword : string){
        console.log(enteredEmail, enteredPassword);
        var userValue : any;

        enteredEmail = enteredEmail.trim();

        await this.getAdminUserByEmail(enteredEmail)
            .then(res => (
                userValue = res.data
            )
                )
            .catch(error => console.log(error));

        const {createHash} = require('crypto');

        console.log(createHash('sha256').update(enteredPassword).digest('hex'));

    }







}

export default new AdminUserService();