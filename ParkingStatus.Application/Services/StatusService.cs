using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts.Status;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Exceptions;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Services
{
    internal sealed class StatusService : IStatusService
    {
        private readonly IRepositoryManager _repositoryManager;
        public StatusService(IRepositoryManager repositoryManager) => _repositoryManager = repositoryManager;

        public async Task<IEnumerable<Status>> GetAllStatusesAsync()
        {
            var statuses = await _repositoryManager.StatusRepository.GetAllAsync();
            return statuses;
        }

        public async Task<Status> GetStatusByIdAsync(int id)
        {
            var status = await _repositoryManager.StatusRepository.GetByIdAsync(id);

            return status;
        }


        public async Task<Status> CreateStatusAsync(int id, StatusForCreationDto statusForCreationDto)
        {
            var status = new Status();
            status.Id = statusForCreationDto.Id;
            status.Name = statusForCreationDto.Name;
            status.Color = statusForCreationDto.Color;
            status.Description = statusForCreationDto.Description;

            _repositoryManager.StatusRepository.AddStatus(status);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();

            return status;

        }

        public async Task UpdateStatusAsync(int id, StatusForUpdateDto statusForUpdateDto)
        {
            var status = await _repositoryManager.StatusRepository.GetByIdAsync(id);

            if(status is null)
            {
                throw new StatusNotFoundException(id);
            }

            status.Name = statusForUpdateDto.Name;
            status.Color = statusForUpdateDto.Color;
            status.Description = statusForUpdateDto.Description;

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }

        public async Task DeleteStatusAsync(int id)
        {
            var status = await _repositoryManager.StatusRepository.GetByIdAsync(id);

            if(status is null)
            {
                throw new StatusNotFoundException(id);
            }

            _repositoryManager.StatusRepository.DeleteStatus(status);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }

    }
}
