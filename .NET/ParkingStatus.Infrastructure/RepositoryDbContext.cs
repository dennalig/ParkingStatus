using Microsoft.EntityFrameworkCore;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Infrastructure.Persistence
{
    public sealed class RepositoryDbContext : DbContext
    {
        public RepositoryDbContext(DbContextOptions options)
            :base(options)
        {

        }

        //Lot items
        public DbSet<Lot> Lots { get; set; }

        public DbSet<LotStatusSchedule> LotStatusSchedules { get; set; }

        public DbSet<LotStatusScheduleDate> LotStatusScheduleDates { get; set; }

        //Status Items
        public DbSet<Status> Statuses { get; set; }

        //Status Event Items
        public DbSet<StatusEvent> StatusEvents { get; set; }

        public DbSet<StatusEventDate> StatusEventDates { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) =>
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(RepositoryDbContext).Assembly);
    }
}
