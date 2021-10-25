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

        public LotService(IRepositoryManager repositoryManger) => _repositoryManager = repositoryManger;
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

  
        public async Task<Lot> CreateLotAsync(int id, LotForCreationDto lotForCreationDto)
        {
            var lot = new Lot();
            lot.Id = lotForCreationDto.Id;
            lot.Name = lotForCreationDto.Name;
            lot.Description = lotForCreationDto.Description;
            lot.LotStatusSchedule = lotForCreationDto.LotStatusSchedule;

            _repositoryManager.LotRepository.AddLot(lot);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();

            return lot;

            
        }

 

        public async Task UpdateLotAsync(int id, LotForUpdateDto lotForUpdateDto)
        {
            var lot = await _repositoryManager.LotRepository.GetByIdAsync(id);

            if(lot is null)
            {
                throw new LotNotFoundException(id);
            }

            lot.Name = lotForUpdateDto.Name;
            lot.Description = lotForUpdateDto.Description;
            lot.LotStatusSchedule = lotForUpdateDto.LotStatusSchedule;

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }

        public async Task DeleteLotAsync(int id)
        {
            var lot = await _repositoryManager.LotRepository.GetByIdAsync(id);

            if(lot is null)
            {
                throw new LotNotFoundException(id);
            }
            _repositoryManager.LotRepository.AddLot(lot);

            await _repositoryManager.UnitOfWork.SaveChangesAsync();
        }
    }
}
