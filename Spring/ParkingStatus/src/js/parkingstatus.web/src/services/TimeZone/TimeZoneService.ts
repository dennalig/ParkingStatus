import axios from 'axios';

const WORLDTIMEAPI_URL : string = 'http://worldtimeapi.org/api/timezone';

class TimeZoneService{


    async getAllTimeZones(){
        return axios.get(WORLDTIMEAPI_URL);
    }

    async getCurrentTimeOfTimeZone(timeZone : string){
        return axios.get(WORLDTIMEAPI_URL +'/'+ timeZone);

        // detect a minute change locally, and every minute change will make a request to this api of the new current time
    }
    

}

export default new TimeZoneService();