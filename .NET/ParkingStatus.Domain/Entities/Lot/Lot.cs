using System;
using System.Collections.Generic;
using System.IO;

namespace ParkingStatus.Domain
{
    public class Lot : BaseEntity
    {
        // Name and Description fields
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<LotStatusSchedule> LotStatusSchedule { get; set; }

    }
}
