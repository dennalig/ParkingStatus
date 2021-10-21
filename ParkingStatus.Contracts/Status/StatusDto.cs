using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Contracts.Status
{
    public class StatusDto : BaseDto
    {
        public string Name { get; set; }
        public string Color { get; set; }
        public string Description { get; set; }
    }
}
