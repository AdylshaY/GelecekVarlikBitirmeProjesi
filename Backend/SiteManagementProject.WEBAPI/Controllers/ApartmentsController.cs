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
    public class ApartmentsController : ApiBaseController<IApartmentService, Apartment, DtoApartment>
    {
        private readonly IApartmentService apartmentService;
        public ApartmentsController(IApartmentService apartmentService) : base(apartmentService)
        {
            this.apartmentService = apartmentService;
        }

        [HttpGet("GetFlats")]
        public IResponse<List<DtoFlats>> GetFlats(int id)
        {
            try
            {
                return apartmentService.GetFlats(id);
            }
            catch (Exception ex)
            {
                return new Response<List<DtoFlats>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error: {ex.Message}",
                    Data = null
                };
            }
        }
    }
}
