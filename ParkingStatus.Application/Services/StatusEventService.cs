using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts.StatusEvent;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Exceptions;
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
        public async Task<IEnumerable<StatusEvent>> GetAllStatusEventsAsync()
        {
            var statusEvents = await _repositoryManager.StatusEventRepository.GetAllAsync();

            return statusEvents;
        }

        public async Task<StatusEvent> GetStatusEventByIdAsync(int id)
        {
            var statusEvent = await _repositoryManager.StatusEventRepository.GetByIdAsync(id);

            if(statusEvent is null)
            {
                throw new StatusEventNotFoundException(id);
            }

            return statusEvent;
        }

        public async Task<StatusEvent> CreateStatusEventAsync(int id, StatusEventForCreationDto statusEventForCreationDto)
        {
            var statusEvent = new StatusEvent();
            statusEvent.Id = statusEventForCreationDto.Id;
            statusEvent.StatusID = statusEventForCreationDto.StatusID;
            statusEvent.Description = statusEventForCreationDto.Description;
            statusEvent.StatusEventDates = statusEventForCreationDto.StatusEventDates;

            _repositoryManager.StatusEventRepository.AddStatusEvent(statusEvent);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();

            return null;
        }

        public async Task UpdateStatusEventAsync(int id, StatusEventForUpdateDto statusEventForUpdateDto)
        {
            var statusEvent = await _repositoryManager.StatusEventRepository.GetByIdAsync(id);

            if(statusEvent is null)
            {
                throw new StatusEventNotFoundException(id);
            }

            statusEvent.StatusID = statusEventForUpdateDto.StatusID;
            statusEvent.Description = statusEventForUpdateDto.Description;
            statusEvent.StatusEventDates = statusEventForUpdateDto.StatusEventDates;

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }

        public async Task DeleteStatusEventAsync(int id)
        {
            var statusEvent = await _repositoryManager.StatusEventRepository.GetByIdAsync(id);

            if(statusEvent is null)
            {
                throw new StatusEventNotFoundException(id);
            }

            _repositoryManager.StatusEventRepository.DeleteStatusEvent(statusEvent);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }
    }
}
