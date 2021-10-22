using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts;
using ParkingStatus.Contracts.Lot;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace ParkingStatus.Application.Services
{
    internal sealed class LotService : ILotService
    {
        private readonly IRepositoryManager _repositoryManager;

        public async Task<IEnumerable<LotDto>> GetAllLotsAsync()
        {
            var lots = await _repositoryManager.LotRepository.GetAllAsync();

            //var lotsDto = lots.Adapt<IEnumerable<LotDto>>();

            return null;

        }

        public Task<LotDto> GetLotByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public LotService(IRepositoryManager repositoryManger) => _repositoryManager = repositoryManger;
        public Task<LotDto> CreateLotAsync(int id, LotForCreationDto lotForCreationDto)
        {
            throw new NotImplementedException();
        }

        public Task DeleteLotAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateLotAsync(int id, LotForUpdateDto lotForUpdateDto)
        {
            throw new NotImplementedException();
        }
    }
}
