
using Microsoft.AspNetCore.Mvc;
using ParkingStatus.Application.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ParkingStatus.Infrastructure.Presentation.Controllers
{
    [ApiController]
    [Route("api/lots/{LotId:int}/lots")]
    public class LotsController: ControllerBase
    {
        private readonly IServiceManager _serviceManager;

        public LotsController(IServiceManager serviceManager) => _serviceManager = serviceManager;

        [HttpGet]
        public async Task<IActionResult> GetLots()
        {
            var lots = await _serviceManager.LotService.GetAllLotsAsync();

            return Ok(lots);
        }
    }
}
