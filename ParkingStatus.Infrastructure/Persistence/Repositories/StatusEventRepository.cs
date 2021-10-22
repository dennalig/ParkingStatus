using Microsoft.EntityFrameworkCore;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    internal sealed class StatusEventRepository : IStatusEventRepository
    {
        private readonly RepositoryDbContext _dbContext;
        public StatusEventRepository(RepositoryDbContext dbContext) => _dbContext = dbContext;

        public async Task<IEnumerable<StatusEvent>> GetAllAsync() =>
            await _dbContext.StatusEvents.Include(x => x.Id).ToListAsync();

        public async Task<StatusEvent> GetByIdAsync(int statusEventId) =>
            await _dbContext.StatusEvents.Include(x => x.Id).FirstOrDefaultAsync(x => x.Id == statusEventId);

        public void AddStatusEvent(StatusEvent statusEvent) => _dbContext.StatusEvents.Add(statusEvent);

        public void DeleteStatusEvent(StatusEvent statusEvent) => _dbContext.StatusEvents.Remove(statusEvent);


        public void EditStatusEvent(StatusEvent statusEvent) => _dbContext.StatusEvents.Update(statusEvent);

        public IEnumerable<StatusEvent> GetAllOfStatus(Status status)
        {
            //https://www.tutlane.com/tutorial/linq/linq-where-clause-filtering-operator
            IEnumerable<StatusEvent> statusEventsOfTypeStatus = _dbContext.StatusEvents.Where(x => x.StatusID == status.Id);
            return statusEventsOfTypeStatus;
        }
            
  

   
    }
}
