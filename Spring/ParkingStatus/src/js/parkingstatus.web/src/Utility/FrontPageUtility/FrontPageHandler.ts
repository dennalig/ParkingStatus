
class FrontPageHandler{
    //this will handle determining what a current lotstatusscheduledate we are using at a given time
    // this will also check for any corresponding status events at the current time.

    //1. Check for statusevents first

    //2. Then check for matching lot statusschedules next 

    findCorrespondingStatusEventDate(currentTime: Date, statusEvents: Array<any>, lotId : number){
        // here we will iterate through status event dates and find if the current time is in between start and end date time

        const foundStatusEvent : any = null;
        const foundStatusEventDate : any = null;

        // use array.find() to find one

        statusEvents.forEach(statusEvent => 
            (statusEvent.StatusEventDates ? 
                statusEvent.StatusEventDates.forEach((seDate: any) => {
                    
                        if(seDate.lotId === lotId){
                            console.log(statusEvent.Description +":"+lotId);
                        }
                    
                }

                )
                : null))
        // console.log(statusEvents[0].StatusEventId);

        //we will return a [statusEvent, statusEventDate]
        // return lotId;
        
    }

    findCorrespondingLSSDate(currentTime: Date, lot : any){
        //same thing with finding currrent statusevent date 

        const foundLSSDate : any = null;

        //return the lotstatusScheduledate
        
    }


}

export default new FrontPageHandler();