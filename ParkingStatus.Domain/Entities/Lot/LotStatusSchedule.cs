using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class LotStatusSchedule : BaseEntity
    {
        // name of the schedule
        public string Name { get; set; }

        public List<LotStatusScheduleDate> lotStatusScheduleDates {get;set;} // list of lot statusscheduledate objects for the schedule object
    }
}
