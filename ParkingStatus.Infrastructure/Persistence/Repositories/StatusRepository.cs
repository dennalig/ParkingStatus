using ParkingStatus.Domain;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    internal sealed class StatusRepository : IStatusRepository
    {
        private readonly RepositoryDbContext _dbContext;

        public StatusRepository(RepositoryDbContext dbContext) => _dbContext = dbContext;
        public void AddStatus(Status status)
        {
            throw new NotImplementedException();
        }

        public void DeleteStatus(Status status)
        {
            throw new NotImplementedException();
        }

        public void EditLot(Status status)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Status>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Status> GetByIdAsync(int statusId)
        {
            throw new NotImplementedException();
        }
    }
}
