using ParkingStatus.Domain.Repositories;
using ParkingStatus.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace ParkingStatus.Infrastructure.Persistence.Repositories
{
    public sealed class RepositoryManager : IRepositoryManager
    {
        private readonly Lazy<ILotRepository> _lazyLotRepository;
        private readonly Lazy<IStatusRepository> _lazyStatusRepository;
        private readonly Lazy<IStatusEventRepository> _lazyStatusEventRepository;
        private readonly Lazy<IUnitOfWork> _lazyUnitOfWork;

        public RepositoryManager(RepositoryDbContext dbContext)
        {
            _lazyLotRepository = new Lazy<ILotRepository>(() => new LotRepository(dbContext));
            _lazyStatusRepository = new Lazy<IStatusRepository>(() => new StatusRepository(dbContext));
            _lazyStatusEventRepository = new Lazy<IStatusEventRepository>(() => new StatusEventRepository(dbContext));
            _lazyUnitOfWork = new Lazy<IUnitOfWork>(() => new UnitOfWork(dbContext));
        }

        public ILotRepository LotRepository => _lazyLotRepository.Value;

        public IStatusRepository StatusRepository => _lazyStatusRepository.Value;

        public IStatusEventRepository StatusEventRepository => _lazyStatusEventRepository.Value;

        public IUnitOfWork UnitOfWork => _lazyUnitOfWork.Value;
    }
}
