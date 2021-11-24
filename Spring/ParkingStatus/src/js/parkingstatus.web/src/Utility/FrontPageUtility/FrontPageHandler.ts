
class FrontPageHandler{
    //this will handle determining what a current lotstatusscheduledate we are using at a given time
    // this will also check for any corresponding status events at the current time.

    //1. Check for statusevents first

    //2. Then check for matching lot statusschedules next 

    async findCorrespondingStatusEventDate(currentTime: Date, statusEvents: Array<any>, lotId : number){
        // here we will iterate through status event dates and find if the current time is in between start and end date time

        console.log(statusEvents);
        let foundStatusEvent : any = null;
        let foundStatusEventDate : any = null;

        // use array.find() to find one
        
        statusEvents.forEach(statusEvent => 
            (statusEvent.StatusEventDates ? 
                statusEvent.StatusEventDates.forEach((seDate: any) => {

                        if(seDate.lotId === lotId){// if we have a matching Lot ID in a date
                            // console.log(statusEvent.Description +":"+lotId);
                            //https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
                            const currentDateTimeValue: number = new Date(currentTime).getTime();

                            const startDateTimeValue : number = new Date(seDate.startTime).getTime();
                            const endDateTimeValue : number = new Date(seDate.endTime).getTime();
                            

                            if((currentDateTimeValue>= startDateTimeValue) 
                                && (currentDateTimeValue <= endDateTimeValue) && (foundStatusEvent === null)
                                 && (foundStatusEventDate === null)){
                                    // console.log(statusEvent.Description +":"+lotId);
                                    foundStatusEvent = statusEvent;
                                    foundStatusEventDate = seDate;
                                    console.log(foundStatusEvent);
                                }
                        }
                    
                }

                )
                : null))
        // console.log(statusEvents[0].StatusEventId);

        //we will return a [statusEvent, statusEventDate]
        // return lotId;

        // console.log(foundStatusEvent);
        // console.log(foundStatusEvent, foundStatusEventDate);
        return foundStatusEvent ;
        
    }

    findCorrespondingLSSDate(currentTime: Date, lot : any){
        //same thing with finding currrent statusevent date 

        const foundLSSDate : any = null;

        //return the lotstatusScheduledate
        
    }


}

export default new FrontPageHandler();