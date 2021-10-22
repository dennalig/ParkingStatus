using ParkingStatus.Domain;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    internal sealed class StatusEventRepository : IStatusEventRepository
    {
        private readonly RepositoryDbContext _dbContext;
        public StatusEventRepository(RepositoryDbContext dbContext) => _dbContext = dbContext;
        public void AddStatusEvent(StatusEvent statusEvent)
        {
            throw new NotImplementedException();
        }

        public void DeleteStatusEvent(StatusEvent statusEvent)
        {
            throw new NotImplementedException();
        }

        public void EditStatusEvent(StatusEvent statusEvent)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<StatusEvent>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<StatusEvent>> GetAllOfStatus(Status status)
        {
            throw new NotImplementedException();
        }

        public Task<StatusEvent> GetByIdAsync(int statusEventId)
        {
            throw new NotImplementedException();
        }
    }
}
