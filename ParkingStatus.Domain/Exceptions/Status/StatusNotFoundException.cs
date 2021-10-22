using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain.Exceptions
{
    public sealed class StatusNotFoundException : NotFoundException
    {
        public StatusNotFoundException(int statusId)
            :base($"Status of id { statusId } was not found.")
        { 
        }
    }
}
