import axios from 'axios';

const STATUSES_REST_API_URL : string = 'http://localhost:8080/api/v1/status';

class StatusService{

    async getAllStatuses(){
       return axios.get(STATUSES_REST_API_URL);
    }

    getStatusById(id: number){
        return axios.get(STATUSES_REST_API_URL + '/'+ id);
    }

    createStatus(status: any){}

    updateStatus(id:number, status:any){}

    deleteStatus(id: number){}

}

export default new StatusService();