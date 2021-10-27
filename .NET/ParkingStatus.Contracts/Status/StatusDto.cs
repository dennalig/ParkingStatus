using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ParkingStatus.Contracts.Status
{
    public class StatusDto : BaseEntityDto
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        public string Color { get; set; }
        public string Description { get; set; }
    }
}
