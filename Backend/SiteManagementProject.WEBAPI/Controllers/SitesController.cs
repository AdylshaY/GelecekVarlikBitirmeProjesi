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
    public class SitesController : ApiBaseController<ISiteService, Site, DtoSite>
    {
        private readonly ISiteService siteService;
        public SitesController(ISiteService siteService) : base(siteService)
        {
            this.siteService = siteService;
        }

        [HttpGet("GetApartments")]
        public IResponse<List<DtoApartment>> GetApartments(int id)
        {
            try
            {
                return siteService.GetApartments(id);
            }
            catch (Exception ex)
            {
                return new Response<List<DtoApartment>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error: {ex.Message}",
                    Data = null
                };
            }
        }
    }
}
