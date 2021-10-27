using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Domain.Repository
{
    public interface IStatusEventRepository
    {
        Task<IEnumerable<StatusEvent>> GetAllAsync();

        IEnumerable<StatusEvent> GetAllOfStatus(Status status); // get all status Events of a certain status

        Task<StatusEvent> GetByIdAsync(int statusEventId);

        void AddStatusEvent(StatusEvent statusEvent);

        void DeleteStatusEvent(StatusEvent statusEvent);

        void EditStatusEvent(StatusEvent statusEvent); // in the edit, this is also where we would alter statusevent dates
    }
}
