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
    public class FlatTypeController : ApiBaseController<IFlatTypeService, FlatType, DtoFlatType>
    {
        private readonly IFlatTypeService flatTypeService;
        public FlatTypeController(IFlatTypeService flatTypeService) : base(flatTypeService)
        {
            this.flatTypeService = flatTypeService;
        }
    }
}
