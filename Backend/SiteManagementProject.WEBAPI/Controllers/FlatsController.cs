using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteManagementProject.ENTITY.Base;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.IBase;
using SiteManagementProject.ENTITY.Models;
using SiteManagementProject.INTERFACE;
using SiteManagementProject.WEBAPI.Base;
using System;
using System.Collections.Generic;

namespace SiteManagementProject.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlatsController : ApiBaseController<IFlatService, Flat, DtoFlat>
    {
        private readonly IFlatService flatService;
        public FlatsController(IFlatService flatService) : base(flatService)
        {
            this.flatService = flatService;
        }

        [HttpGet("GetBillsByFlatId")]
        //[Authorize(Policy = "RequireAdminRole")]
        [AllowAnonymous]
        public IResponse<List<DtoBill>> GetBillsByFlatId(int id)
        {
            try
            {
                return flatService.GetBillsByFlatId(id);
            }
            catch (Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error: {ex.Message}",
                    Data = null
                };
            }
        }
    }
}
