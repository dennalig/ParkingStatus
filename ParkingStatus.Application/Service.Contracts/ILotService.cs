using ParkingStatus.Contracts;
using ParkingStatus.Contracts.Lot;
using ParkingStatus.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface ILotService
    {
        Task<IEnumerable<Lot>> GetAllLotsAsync();

        Task<Lot> GetLotByIdAsync(int id);

        Task<Lot> CreateLotAsync(int id, LotForCreationDto lotForCreationDto);

        Task UpdateLotAsync(int id, LotForUpdateDto lotForUpdateDto);

        Task DeleteLotAsync(int id);
    }
}
