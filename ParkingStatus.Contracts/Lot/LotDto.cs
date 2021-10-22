using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts
{
   public class LotDto: BaseEntityDto
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public LotStatusSchedule lotStatusSchedule { get; set; }
    }
}
