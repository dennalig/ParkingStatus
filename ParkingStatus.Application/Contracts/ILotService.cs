using ParkingStatus.Contracts;
using ParkingStatus.Contracts.Lot;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Application.Contracts
{
    public interface ILotService
    {
        Task<IEnumerable<LotDto>> GetAllLotsAsync();

        Task<LotDto> GetLotByIdAsync(int id);

        Task<LotDto> CreateLotAsync(int id, LotForCreationDto lotForCreationDto);

        Task DeleteLotAsync(int id);
    }
}
