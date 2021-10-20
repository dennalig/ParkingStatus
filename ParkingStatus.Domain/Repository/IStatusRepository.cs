using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Domain.Repository
{
    public interface IStatusRepository
    {
        Task<IEnumerable<Status>> GetAllAsync();

        Task<Status> GetByIdAsync(int statusId);

        void AddStatus(Status status);

        void DeleteStatus(Status status);

        void EditLot(Status status);
    }
}
