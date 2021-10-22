using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain.Exceptions
{
    public sealed class LotNotFoundException : NotFoundException
    {
        public LotNotFoundException(int lotId)
            :base($"Lot of id { lotId } was not found.")
        { 
        }
    }
}
