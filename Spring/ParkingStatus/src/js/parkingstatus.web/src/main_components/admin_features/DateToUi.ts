
//class to split times for ui display
class DateToUi{

    getDayAndTime(timeString : string){
        return timeString.split(' ');
    }

}
export default new DateToUi();