using System;

namespace ParkingStatus.Contracts
{
    public class LotStatusScheduleDateDto : BaseEntityDto
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public int StatusID { get; set; }
    }
}