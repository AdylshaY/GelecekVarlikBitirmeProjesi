using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SiteManagementProject.DAL.Abstract;
using SiteManagementProject.ENTITY.Base;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.IBase;
using SiteManagementProject.ENTITY.Models;
using SiteManagementProject.INTERFACE;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.BLL
{
    public class UserManager : GenericManager<User, DtoUser>, IUserService
    {
        private IConfiguration configuration;
        public readonly IUserRepository userRepository;

        public UserManager(IServiceProvider service, IConfiguration configuration, DbContext context) : base(service)
        {
            userRepository = service.GetService<IUserRepository>();
            this.configuration = configuration;
        }

        public IResponse<DtoUserToken> Login(DtoLogin login)
        {
            var user = userRepository.Login(ObjectMapper.Mapper.Map<User>(login));
            if (user != null)
            {
                // token uretmek gerekiyor
                var dtoUser = ObjectMapper.Mapper.Map<DtoLoginUser>(user);

                var token = new TokenManager(configuration).CreateAccessToken(dtoUser);

                var userToken = new DtoUserToken()
                {
                    DtoLoginUser = dtoUser,
                    AccessToken = token
                };

                return new Response<DtoUserToken>()
                {
                    Message = "Token uretildi",
                    StatusCode = StatusCodes.Status200OK,
                    Data = userToken
                };
            }
            else
            {
                return new Response<DtoUserToken>
                {
                    Message = "Kullanici adi veya parola yanlis",
                    StatusCode = StatusCodes.Status406NotAcceptable,
                    Data = null
                };
            }
        }

        public IResponse<List<DtoFlats>> GetUsersFlats(int id)
        {
            try
            {
                var list = userRepository.GetUsersFlats(id);
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<DtoFlats>(x)).ToList();

                return new Response<List<DtoFlats>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
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
