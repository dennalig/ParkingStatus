﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ParkingStatus.Contracts.Lot
{
    public class LotForUpdateDto: BaseEntityDto
    {
        [Required(ErrorMessage = "Name is required", AllowEmptyStrings = false)]
        public string Name { get; set; }
        public string Description { get; set; }

        public LotStatusScheduleDto lotStatusSchedule { get; set; }
    }
}
