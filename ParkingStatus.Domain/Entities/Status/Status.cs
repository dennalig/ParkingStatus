using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class Status: BaseEntity
    {
        public string Name { get;set; }
        public string Color { get; set; }
        public string Description { get; set; }
    }
}
