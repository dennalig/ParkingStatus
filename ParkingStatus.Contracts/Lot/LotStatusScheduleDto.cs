using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts
{
    public class LotStatusScheduleDto : BaseEntityDto
    {
        public string Name { get; set; }

        public List<LotStatusScheduleDate> lotStatusScheduleDates { get; set; } // list of lot statusscheduledate objects for the schedule object
    }
}
