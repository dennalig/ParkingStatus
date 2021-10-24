using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class StatusEventDate : BaseEntity
    {
        // start and end time and an id referring to that of a corresponding Lot
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int LotID { get; set; }

        public int StatusEventId { get; set; }
   
    }
}
