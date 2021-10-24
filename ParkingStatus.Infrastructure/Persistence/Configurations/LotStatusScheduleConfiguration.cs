using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Configurations
{
    internal class LotStatusScheduleConfiguration : IEntityTypeConfiguration<LotStatusSchedule>
    {
        public void Configure(EntityTypeBuilder<LotStatusSchedule> builder)
        {
            builder.ToTable(nameof(LotStatusSchedule));

            builder.HasKey(lotStatusSchedule => lotStatusSchedule.Id);

            builder.Property(lotStatusSchedule => lotStatusSchedule.Name);

            
        }
    }
}
