using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Domain.Repositories
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync();
    }
}
