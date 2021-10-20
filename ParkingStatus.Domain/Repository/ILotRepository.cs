using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Domain.Repository
{
    public interface ILotRepository
    {
        // May need to add in cancellationtoken functionality in regards to threading later
        Task<IEnumerable<Lot>> GetAllAsync();

        Task<Lot> GetByIdAsync(int lotId);

        void AddLot(Lot lot);

        void DeleteLot(Lot lot);

        void EditLot(Lot lot); // since each lot is assigned a status schedule, a change of a status schedule
                               // or status schedule date would be a call to edit the actual lot on the contract
    }
}
