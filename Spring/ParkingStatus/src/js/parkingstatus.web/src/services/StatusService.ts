import axios from 'axios';

const STATUSES_REST_API_URL : string = 'http://localhost:8080/api/v1/status';

class StatusService{

    async getAllStatuses(){
       return axios.get(STATUSES_REST_API_URL);
    }

    async getStatusById(id: number){
        return axios.get(STATUSES_REST_API_URL + '/'+ id);
    }

    async createStatus(status: any){
        // console.log(status);

        return axios.post(STATUSES_REST_API_URL, status);
    }

    async updateStatus(id:number, status:any){}

    async deleteStatus(id: number){}

}

export default new StatusService();