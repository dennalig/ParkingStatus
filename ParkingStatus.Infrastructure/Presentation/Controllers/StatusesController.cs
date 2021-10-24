using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;


namespace ParkingStatus.Infrastructure.Presentation.Controllers
{
    [ApiController]
    [Route("api/statues/{statusId:int}/statuses")]
    public class StatusesController : ControllerBase
    {

    }
}
