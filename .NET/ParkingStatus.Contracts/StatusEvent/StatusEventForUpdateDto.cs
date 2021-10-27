using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ParkingStatus.Contracts.StatusEvent
{
    public class StatusEventForUpdateDto: BaseEntityDto
    {
        public string Description { get; set; }

        [Required(ErrorMessage = "Status ID is required")]
        public int StatusID { get; set; } // a status event can only have one status that it is assigned to ,

        public ICollection<StatusEventDate> StatusEventDates { get; set; }
    }
}
