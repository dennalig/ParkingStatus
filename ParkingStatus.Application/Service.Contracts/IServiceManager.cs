using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Application.Contracts
{
    public interface IServiceManager
    {
        ILotService LotService { get;  }

        IStatusService StatusService { get; }

        IStatusEventService StatusEventService { get; }
    }
}
