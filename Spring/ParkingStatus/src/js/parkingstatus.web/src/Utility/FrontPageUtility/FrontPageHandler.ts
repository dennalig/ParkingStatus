
class FrontPageHandler{
    //this will handle determining what a current lotstatusscheduledate we are using at a given time
    // this will also check for any corresponding status events at the current time.

    //1. Check for statusevents first

    //2. Then check for matching lot statusschedules next 

    findCorrespondingStatusEventDate(currentTime: Date, statusEvents: Array<any>,lotId : number){
        // here we will iterate through status event dates and find if the current time is in between start and end date time

        const newDate= new Date('2021-11-20 22:33');
        console.log(newDate);
        console.log(statusEvents[0].StatusEventId);
        return lotId;
    }

    findCorrespondingLSSDate(currentTime: Date, lot : any){
        //same thing with finding currrent statusevent date 

        
    }


}

export default new FrontPageHandler();