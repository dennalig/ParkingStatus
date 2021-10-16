using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class LotStatusScheduleDate
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public int StatusID { get; set; } // each LotStatusScheduleDate can have a different status

    }
}
