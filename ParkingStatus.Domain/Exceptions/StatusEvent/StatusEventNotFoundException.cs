using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain.Exceptions
{
    public sealed class StatusEventNotFoundException : NotFoundException
    {
        public StatusEventNotFoundException(int statusEventId)
            :base($"Status Event of id { statusEventId } was not found.")
        { 
        }
    }
}
