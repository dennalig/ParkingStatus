using ParkingStatus.Contracts.StatusEvent;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface IStatusEventService
    {
        Task<IEnumerable<StatusEvent>> GetAllStatusEventsAsync();
        Task<StatusEvent> GetStatusEventByIdAsync(int id);

        Task<StatusEvent> CreateStatusEventAsync(int id,
            StatusEventForCreationDto statusEventForCreationDto);

        Task UpdateStatusEventAsync(int id,
            StatusEventForUpdateDto statusEventForUpdateDto);

        Task DeleteStatusEventAsync(int id);
    }
}
