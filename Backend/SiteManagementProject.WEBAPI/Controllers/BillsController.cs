using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.Models;
using SiteManagementProject.INTERFACE;
using SiteManagementProject.WEBAPI.Base;

namespace SiteManagementProject.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillsController : ApiBaseController<IBillService, Bill, DtoBill>
    {
        private readonly IBillService billService;
        public BillsController(IBillService billService) : base(billService)
        {
            this.billService = billService;
        }
    }
}
