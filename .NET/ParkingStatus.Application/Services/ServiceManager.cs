using ParkingStatus.Application.Contracts;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Application.Services
{
    public sealed class ServiceManager : IServiceManager
    {

        private readonly Lazy<ILotService> _lazyLotService;
        private readonly Lazy<IStatusService> _lazyStatusService;
        private readonly Lazy<IStatusEventService> _lazyStatusEventService;

        public ServiceManager(IRepositoryManager repositoryManager)
        {
            _lazyLotService = new Lazy<ILotService>(() => new LotService(repositoryManager));
            _lazyStatusService = new Lazy<IStatusService>(() => new StatusService(repositoryManager));
            _lazyStatusEventService = new Lazy<IStatusEventService>(() => new StatusEventService(repositoryManager));
        }
        public ILotService LotService => _lazyLotService.Value;

        public IStatusService StatusService => _lazyStatusService.Value;

        public IStatusEventService StatusEventService => _lazyStatusEventService.Value;
    }
}
