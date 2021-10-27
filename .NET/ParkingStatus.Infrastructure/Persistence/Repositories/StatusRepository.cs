using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<Status>> GetAllAsync() =>
            await _dbContext.Statuses.Include(x => x.Id).ToListAsync();

        public async Task<Status> GetByIdAsync(int statusId) =>
            await _dbContext.Statuses.Include(x => x.Id).FirstOrDefaultAsync(x => x.Id == statusId);

        public void AddStatus(Status status) => _dbContext.Statuses.Add(status);


        public void DeleteStatus(Status status) => _dbContext.Statuses.Remove(status);


        public void EditLot(Status status) => _dbContext.Statuses.Update(status);
   


    }
}
