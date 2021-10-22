using Microsoft.EntityFrameworkCore;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    internal sealed class LotRepository : ILotRepository
    {
        private readonly RepositoryDbContext _dbContext;
        public LotRepository(RepositoryDbContext dbContext) => _dbContext = dbContext;
        
        public async Task<IEnumerable<Lot>> GetAllAsync() =>
            await _dbContext.Lots.Include(x => x.Id).ToListAsync();
        

        public async Task<Lot> GetByIdAsync(int lotId) =>
            await _dbContext.Lots.Include(x => x.Id).FirstOrDefaultAsync(x => x.Id == lotId);


        public void AddLot(Lot lot) => _dbContext.Lots.Add(lot);

        public void DeleteLot(Lot lot) => _dbContext.Lots.Remove(lot);

        //https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.update?view=efcore-5.0
        public void EditLot(Lot lot) => _dbContext.Lots.Update(lot);


    }
}
