using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts.Lot
{
    public class LotStatusScheduleForCreationDto
    { //TODO: consider
        public string Name { get; set; }

        public List<LotStatusScheduleDateDto> lotStatusScheduleDates { get; set; } // list of lot statusscheduledate objects for the schedule object
    }
}
