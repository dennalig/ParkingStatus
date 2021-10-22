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

        public DbSet<Lot> Lots { get; set; }

        public DbSet<Status> Statuses { get; set; }

        public DbSet<StatusEvent> StatusEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) =>
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(RepositoryDbContext).Assembly);
    }
}
