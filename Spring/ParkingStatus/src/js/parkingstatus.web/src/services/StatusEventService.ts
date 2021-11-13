import axios from 'axios';

const STATUSEVENT_REST_API_URL : string = 'http://localhost:8080/api/v1/statusevents';

class StatusEventService{

    getAllStatusEvents(){}

    getAllStatusEventsOfStatus(statusId : number){}

    getStatusEventById(id: number){}

    createStatusEvent(statusEvent: any){}

    updateStatusEvent(id: number, statusEvent: any){}

    deleteStatusEvent(id: number){}

    
}