import axios from 'axios';

const STATUSEVENT_REST_API_URL : string = 'http://localhost:8080/api/v1/statusevents';

class StatusEventService{

    async getAllStatusEvents(){
        return axios.get(STATUSEVENT_REST_API_URL);
    }

    async getAllStatusEventsOfStatus(statusId : number){
        return axios.get(STATUSEVENT_REST_API_URL+"/status/"+ statusId);
    }

    async getStatusEventById(id: number){
        return axios.get(STATUSEVENT_REST_API_URL+"/"+ id);
    }

    createStatusEvent(statusEvent: any){}

    updateStatusEvent(id: number, statusEvent: any){}

    deleteStatusEvent(id: number){}

    
}

export default new StatusEventService();