using ParkingStatus.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Domain.Repository
{
    public interface IRepositoryManager
    {
        ILotRepository LotRepository { get;  }

        IStatusRepository StatusRepository { get;  }

        IStatusEventRepository StatusEventRepository { get;  }

        IUnitOfWork UnitOfWork { get; }
    }
}
