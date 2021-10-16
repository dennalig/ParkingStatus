using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain
{
    public class StatusEvent : BaseEntity
    {
        // Name and description fields
        public string Description { get; set; }
        
        public int StatusID { get; set; } // a status event can only have one status that it is assigned to ,
                                                          
        public List<StatusEventDate> StatusEventDates { get; set; } // each entry in the list implies a varying duration (start and endtime) 
                                                                    // and/or a varying Lot 

    }
}
