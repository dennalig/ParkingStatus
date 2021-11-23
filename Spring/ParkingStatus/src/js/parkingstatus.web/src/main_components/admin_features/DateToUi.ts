
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

}
export default new DateToUi();