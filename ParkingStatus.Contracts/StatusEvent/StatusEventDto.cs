using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts.StatusEvent
{
    public class StatusEventDto: BaseDto
    {
        public string Description { get; set; }

        public int StatusID { get; set; } // a status event can only have one status that it is assigned to ,

        public List<StatusEventDateDto> StatusEventDates { get; set; }
    }
}
