using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class LotStatusScheduleDate: BaseEntity
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public int StatusID { get; set; } // each LotStatusScheduleDate can have a different status

        public int LotStatusScheduleId { get; set; }
    }
}
