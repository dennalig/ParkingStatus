using ParkingStatus.Contracts.Status;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface IStatusService
    {
        Task<IEnumerable<StatusDto>> GetAllStatusesAsync();

        Task<StatusDto> GetStatusByIdAsync(int id);

        Task<StatusDto> CreateStatusAsync(int id, StatusForCreationDto statusForCreationDto);

        Task UpdateStatusAsync(int id, StatusForUpdateDto statusForUpdateDto);

        Task DeleteStatusAsync(int id);
    }
}
