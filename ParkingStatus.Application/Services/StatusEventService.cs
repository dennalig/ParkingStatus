using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts.StatusEvent;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Services
{
    internal sealed class StatusEventService : IStatusEventService
    {

        private readonly IRepositoryManager _repositoryManager;
        public StatusEventService(IRepositoryManager repositoryManager) => _repositoryManager = repositoryManager;
        public Task<StatusEvent> CreateStatusEventAsync(int id, StatusEventForCreationDto statusEventForCreationDto)
        {
            throw new NotImplementedException();
        }

        public Task DeleteStatusEventAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<StatusEvent>> GetAllStatusEventsAsync()
        {
            throw new NotImplementedException();
        }

        public Task<StatusEvent> GetStatusEventByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateStatusEventAsync(int id, StatusEventForUpdateDto statusEventForUpdateDto)
        {
            throw new NotImplementedException();
        }
    }
}
