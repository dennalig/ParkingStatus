using ParkingStatus.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    internal sealed class UnitOfWork : IUnitOfWork
    {
        private readonly RepositoryDbContext _dbContext;
        public UnitOfWork(RepositoryDbContext dbContext) => _dbContext = dbContext;
        public Task<int> SaveChangesAsync() =>
            _dbContext.SaveChangesAsync();
    }
}
