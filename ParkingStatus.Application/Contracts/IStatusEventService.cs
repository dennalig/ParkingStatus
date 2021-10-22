using ParkingStatus.Contracts.StatusEvent;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface IStatusEventService
    {
        Task<IEnumerable<StatusEventDto>> GetAllStatusEventsAsync();
        Task<StatusEventDto> GetStatusEventByIdAsync(int id);

        Task<StatusEventDto> CreateStatusEventAsync(int id,
            StatusEventForCreationDto statusEventForCreationDto);

        Task UpdateStatusEventAsync(int id,
            StatusEventForUpdateDto statusEventForUpdateDto);

        Task DeleteStatusEventAsync(int id);
    }
}
