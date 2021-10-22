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
        public void AddLot(Lot lot)
        {
            throw new NotImplementedException();
        }

        public void DeleteLot(Lot lot)
        {
            throw new NotImplementedException();
        }

        public void EditLot(Lot lot)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Lot>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Lot> GetByIdAsync(int lotId)
        {
            throw new NotImplementedException();
        }
    }
}
