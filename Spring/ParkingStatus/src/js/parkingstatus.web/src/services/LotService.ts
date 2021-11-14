import axios from 'axios';

const LOTS_REST_API_URL : string = 'http://localhost:8080/api/v1/lots';

class LotService{


    async getAllLots(){
        return axios.get(LOTS_REST_API_URL);
    }
    
    getLotById(id :number){
        return axios.get(LOTS_REST_API_URL+'/'+ id);
    }

    createLot(lot: any){}

    updateLot(id: number, lot: any){}

    deleteLot(id: number){}

}

export default new LotService();