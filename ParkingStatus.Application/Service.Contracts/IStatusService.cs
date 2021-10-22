using ParkingStatus.Contracts.Status;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface IStatusService
    {
        Task<IEnumerable<Status>> GetAllStatusesAsync();

        Task<Status> GetStatusByIdAsync(int id);

        Task<Status> CreateStatusAsync(int id, StatusForCreationDto statusForCreationDto);

        Task UpdateStatusAsync(int id, StatusForUpdateDto statusForUpdateDto);

        Task DeleteStatusAsync(int id);
    }
}
