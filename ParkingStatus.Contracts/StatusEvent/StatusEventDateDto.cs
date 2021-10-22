using System;

namespace ParkingStatus.Contracts.StatusEvent
{
    public class StatusEventDateDto : BaseEntityDto
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int LotID { get; set; }
    }
}