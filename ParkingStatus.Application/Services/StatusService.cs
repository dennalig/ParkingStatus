using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts.Status;
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
        public Task<StatusDto> CreateStatusAsync(int id, StatusForCreationDto statusForCreationDto)
        {
            throw new NotImplementedException();
        }

        public Task DeleteStatusAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<StatusDto>> GetAllStatusesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<StatusDto> GetStatusByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateStatusAsync(int id, StatusForUpdateDto statusForUpdateDto)
        {
            throw new NotImplementedException();
        }
    }
}
