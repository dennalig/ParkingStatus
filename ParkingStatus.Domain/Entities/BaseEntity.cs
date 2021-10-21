using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public abstract class BaseEntity 
    {
        // Allows for the storage of ids
        // each entity will inherit an id field
        public int Id { get; set; }
    }
}
