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
            //https://www.entityframeworktutorial.net/basics/context-class-in-entity-framework.aspx#:~:text=It%20represent%20a%20session%20with,%2C%20Update%2C%20Delete)%20operations.&text=The%20context%20class%20is%20used,settings%2C%20caching%2C%20transaction%20etc.
            //Db context explanation


            //https://stackoverflow.com/questions/43200184/entitytypebuilder-does-not-contain-a-definition-for-totable-in-ef-core
            builder.ToTable(nameof(Lot));

            builder.HasKey(lot => lot.Id);

            builder.Property(lot => lot.Name).IsRequired();

            builder.Property(lot => lot.Description);


        }
    }
}
