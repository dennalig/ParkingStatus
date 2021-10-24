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
    internal sealed class StatusEventConfiguration : IEntityTypeConfiguration<StatusEvent>
    {
        public void Configure(EntityTypeBuilder<StatusEvent> builder)
        {
            throw new NotImplementedException();
        }
    }
}
