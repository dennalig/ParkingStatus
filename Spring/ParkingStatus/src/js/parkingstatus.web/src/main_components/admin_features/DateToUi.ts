
//class to split times for ui display
class DateToUi{

    getDayAndTime(timeString : string){
        return timeString.split(' ');
    }


    // getting just the hour and minute after T in the string 
    parseCurrentTimeFromAPI(dateTime: string){
        // console.log(dateTime);
        const time : any = /T\d\d:\d\d/s.exec(dateTime);

        if(time !== null){
            // console.log(time[0].slice(1));

            return time[0].slice(1);
            
        }
        // console.log(time[0]);

        
        
    }

    parseCurrentTimeWithSecondsFromAPI(dateTime: Date){
        // console.log(dateTime);

        const dateString : string = new Date(dateTime).toString();
        // console.log(dateString);
        const time : any = /\d\d:\d\d:\d\d/s.exec(dateString);

        if(time !== null){
            // console.log(time[0].slice(1));

            // console.log(time[0]);

            return time[0];
            
        }
        // console.log(time[0]);

        
        
    }

    parseIntoSecondsValue(timeString : string){
        return timeString.split(':');
    }

}
export default new DateToUi();