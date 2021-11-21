import axios from 'axios';

const LOTS_REST_API_URL : string = 'http://localhost:8080/api/v1/lots';

class LotService{


    async getAllLots(){
        return axios.get(LOTS_REST_API_URL);
    }
    
    async getLotById(id :number){
        return axios.get(LOTS_REST_API_URL+'/'+ id);
    }

    async createLot(lot: any){
        return axios.post(LOTS_REST_API_URL, lot)
    }

    async updateLot(id: number, lot: any){
        return axios.post(LOTS_REST_API_URL+'/'+ id, lot);
    }

    deleteLot(id: number){
        return axios.delete(LOTS_REST_API_URL + '/'+id);
    }

}

export default new LotService();