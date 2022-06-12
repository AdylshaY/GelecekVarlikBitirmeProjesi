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
    public class UsersController : ApiBaseController<IUserService, User, DtoUser>
    {
        private readonly IUserService userService;
        public UsersController(IUserService userService) : base(userService)
        {
            this.userService = userService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IResponse<DtoUserToken> Login(DtoLogin login)
        {
            try
            {
                return userService.Login(login);
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


        [HttpGet("GetUsersFlats")]
        public IResponse<List<DtoFlats>> GetUsersFlats(int id)
        {
            try
            {
                return userService.GetUsersFlats(id);
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
