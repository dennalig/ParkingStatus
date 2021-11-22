import axios from 'axios';

const WORLDTIMEAPI_URL : string = 'http://worldtimeapi.org/api/timezone';

class TimeZoneService{


    async getAllTimeZones(){
        return axios.get(WORLDTIMEAPI_URL);
    }

}

export default new TimeZoneService();