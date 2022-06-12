using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteManagementProject.ENTITY.Base;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.IBase;
using SiteManagementProject.ENTITY.Models;
using SiteManagementProject.INTERFACE;
using SiteManagementProject.WEBAPI.Base;
using System;

namespace SiteManagementProject.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AdminController
    {
        private readonly IAdminService adminService;
        public AdminController(IAdminService adminService)
        {
            this.adminService = adminService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IResponse<DtoUserToken> Login(DtoLogin login)
        {
            try
            {
                return adminService.Login(login);
            }
            catch (Exception ex)
            {
                return new Response<DtoUserToken>
                {
                    Message = "Error: " + ex.Message,
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Data = null
                };
            }
        }
    }
}
