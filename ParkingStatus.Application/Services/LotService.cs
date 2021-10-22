using ParkingStatus.Application.Contracts;
using ParkingStatus.Contracts;
using ParkingStatus.Contracts.Lot;
using ParkingStatus.Domain;
using ParkingStatus.Domain.Exceptions;
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

        public async Task<IEnumerable<Lot>> GetAllLotsAsync()
        {
            var lots = await _repositoryManager.LotRepository.GetAllAsync();

            return lots;

        }

        public async Task<Lot> GetLotByIdAsync(int id)
        {
            var lot = await _repositoryManager.LotRepository.GetByIdAsync(id);

            if(lot is null)
            {
                throw new LotNotFoundException(id);
            }
            return lot;
        }

        public LotService(IRepositoryManager repositoryManger) => _repositoryManager = repositoryManger;
        public Task<Lot> CreateLotAsync(int id, LotForCreationDto lotForCreationDto)
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
