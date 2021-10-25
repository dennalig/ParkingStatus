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
    internal sealed class StatusEventDateConfiguration : IEntityTypeConfiguration<StatusEventDate>
    {
        public void Configure(EntityTypeBuilder<StatusEventDate> builder)
        {
            //throw new NotImplementedException();
        }
    }
}
