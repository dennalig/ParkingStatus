using Microsoft.EntityFrameworkCore;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure
{
    public class ParkingStatusContext : DbContext
    {

        public ParkingStatusContext(DbContextOptions<ParkingStatusContext> options)
            :base(options)
        {

        }

        public DbSet<Lot> Lots { get; set; }
        public DbSet<LotStatusSchedule> LotStatusSchedules { get; set; }
        public DbSet<LotStatusScheduleDate> LotStatusScheduleDates { get; set; }

        public DbSet<Status> Statuses { get; set; }

        public DbSet<StatusEvent> StatusEvents { get; set; }
        public DbSet<StatusEventDate> StatusEventDates { get; set; }

    }
}
