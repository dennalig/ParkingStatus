import DateToUi from '../../main_components/admin_features/DateToUi';

class FrontPageHandler{
    //this will handle determining what a current lotstatusscheduledate we are using at a given time
    // this will also check for any corresponding status events at the current time.

    //1. Check for statusevents first

    //2. Then check for matching lot statusschedules next 

    async findCorrespondingStatusEventDate(currentTime: Date, statuses: Array<any>,
        statusEvents: Array<any>, lotId : number){
        // here we will iterate through status event dates and find if the current time is in between start and end date time

        // console.log(lotId);
        // console.log(statusEvents);
        let foundStatusEvent : any = null;
        let foundStatusEventDate : any = null;
        let foundStatus: any = null;

        // use array.find() to find one
        
       statusEvents.forEach(statusEvent => statusEvent.StatusEventDates.forEach((seDate: any) => {
            // console.log(seDate.lotId, lotId);
            // console.log('here');
            // console.log(lotId);
            if (seDate.lotId === lotId) { // if we have a matching Lot ID in a date
                // console.log(statusEvent.Description +":"+lotId);
                //https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
                const currentDateTimeValue: number = new Date(currentTime).getTime();

                const startDateTimeValue: number = new Date(seDate.startTime).getTime();
                const endDateTimeValue: number = new Date(seDate.endTime).getTime();
                // console.log(statusEvent);
                if ((currentDateTimeValue >= startDateTimeValue)
                    && (currentDateTimeValue <= endDateTimeValue) && (foundStatusEvent === null)
                    && (foundStatusEventDate === null)) {
                    // console.log(statusEvent.Description +":"+lotId);
                    foundStatusEvent = statusEvent;
                    foundStatusEventDate = seDate;
                    // console.log(foundStatusEvent);
                }
            }

        }

        )
        )
        // console.log(statusEvents[0].StatusEventId);

        //we will return a [statusEvent, statusEventDate, and status]
        // return lotId;

        // console.log(foundStatusEvent);
        // console.log(foundStatusEvent, foundStatusEventDate);

        if(foundStatusEventDate !== null && foundStatusEvent !== null){
            //find the stautus of that 
            const foundStatusId : number = foundStatusEvent.StatusId;
            // console.log(foundStatusId);

            foundStatus = statuses.find(status => status.statusId === foundStatusId);

            // console.log(foundStatus);
        }

        return [foundStatusEvent, foundStatusEventDate, foundStatus] ;
        
    }

    async findCorrespondingLSSDate(currentTime: Date, statuses: Array<any>, lot : any){
        //same thing with finding currrent statusevent date 

        let foundLSSDate : any = null;

        let foundStatus : any = null;

        
        const dayArray: Array<string> = ['Sun', 'Mon', 'Tue', 
                        'Wed', 'Thur', 'Fri', 'Sat'];

        let day = dayArray.indexOf(dayArray[new Date(currentTime).getDay()]);

        // console.log(day);
        // console.log(lot.LotID);
        lot.LotStatusSchedule.LotStatusScheduleDates.forEach((lssDate: any) => {
            const startTimeArr = DateToUi.getDayAndTime(lssDate.startTime);
            const endTimeArr = DateToUi.getDayAndTime(lssDate.endTime);

            //LSS dates only go from SUN to SAT and don't wrap around from SAT to SUN so values should work here

            // 60 seconds in a minute
            //3600 seconds in an hour
            //86400 seconds in a day
            // console.log(currentTime.toString());
            // console.log(lssDate);
            if((day >= dayArray.indexOf(startTimeArr[0])) && 
                (day <= dayArray.indexOf(endTimeArr[0])) && 
                (foundLSSDate === null)){
                   const currentTimeValue: string = DateToUi.parseCurrentTimeWithSecondsFromAPI(currentTime);
                        //    console.log(currentTimeValue);
                    const timeValues : Array<string> = DateToUi.parseIntoSecondsValue(currentTimeValue);
                    const currNumericTimeValues:Array<number> = timeValues.map(value => parseInt(value));

                    const currSecValue: number = (currNumericTimeValues[0]*3600) + 
                        (currNumericTimeValues[1] * 60) + (currNumericTimeValues[2]) + (86400*day);

             

                    const startTimeValues : Array<string> = 
                        DateToUi.parseIntoSecondsValue(startTimeArr[1]+':00');
                    
                    const startNumericTimeValues: Array<number> = startTimeValues.map(value => parseInt(value));
                    // console.log(startNumericTimeValues);
                    const startSecValue: number = (startNumericTimeValues[0]*3600) +
                        (startNumericTimeValues[1] *60) + (startNumericTimeValues[2]) + 
                            (86400 *dayArray.indexOf(startTimeArr[0]));
                    
                    


                    const endTimeValues : Array<string> = 
                    DateToUi.parseIntoSecondsValue(endTimeArr[1]+':00');
                
                    const endNumericTimeValues: Array<number> = endTimeValues.map(value => parseInt(value));
                    // console.log(endNumericTimeValues);
                    const endSecValue: number = (endNumericTimeValues[0]*3600) +
                    (endNumericTimeValues[1] *60) + (endNumericTimeValues[2]) + 
                        (86400 *dayArray.indexOf(endTimeArr[0]));
                
                    

                    // console.log(lssDate);

                    if((currSecValue>= startSecValue) && (currSecValue <= endSecValue) &&
                        (foundLSSDate === null)){
                            foundLSSDate = lssDate;
                            console.log("Current second value: "+currSecValue);
                            console.log("Start Second value: "+ startSecValue);
                            console.log("End Second value: "+ endSecValue);
                            // console.log(foundLSSDate);
                            // console.log(lot);
                        }


      

                }

                // assign numeric value to the day (maybe clock numeric value * )



            // console.log(value);
        });
        
        if(foundLSSDate !== null){
            const foundStatusId : number = foundLSSDate.statusId;
            // console.log(foundStatusId);

            foundStatus = statuses.find(status => status.statusId === foundStatusId);
            // console.log(foundStatus);
        }

        return [foundLSSDate, foundStatus];

        //return the lotstatusScheduledate
        
    }


//https://stackoverflow.com/questions/24998624/day-name-from-date-in-js

        




}

export default new FrontPageHandler();