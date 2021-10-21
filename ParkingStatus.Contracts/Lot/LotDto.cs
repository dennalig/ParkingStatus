using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts
{
   public class LotDto: BaseDto
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public LotStatusScheduleDto lotStatusSchedule { get; set; }
    }
}
