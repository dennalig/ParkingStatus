using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Infrastructure.Persistence.Configurations
{
    internal sealed class LotConfiguration : IEntityTypeConfiguration<Lot>
    {
        public void Configure(EntityTypeBuilder<Lot> builder)
        {
            //https://stackoverflow.com/questions/43200184/entitytypebuilder-does-not-contain-a-definition-for-totable-in-ef-core
            builder.ToTable(nameof(Lot));
        }
    }
}
