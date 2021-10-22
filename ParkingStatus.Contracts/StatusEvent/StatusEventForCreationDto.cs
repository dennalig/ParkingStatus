using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ParkingStatus.Contracts.StatusEvent
{
    public class StatusEventForCreationDto: BaseEntityDto
    {
        public string Description { get; set; }

        [Required(ErrorMessage = "Status ID is required")]
        public int StatusID { get; set; } // a status event can only have one status that it is assigned to ,

        public List<StatusEventDateDto> StatusEventDates { get; set; }
    }
}
