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
    public class SiteManager : GenericManager<Site, DtoSite>, ISiteService
    {
        private IConfiguration configuration;
        public readonly ISiteRepository siteRepository;
        public SiteManager(IServiceProvider service, IConfiguration configuration, DbContext context) : base(service)
        {
            siteRepository = service.GetService<ISiteRepository>();
            this.configuration = configuration;
        }

        public IResponse<List<DtoApartment>> GetApartments(int id)
        {
            try
            {
                var list = siteRepository.GetApartments(id);
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<DtoApartment>(x)).ToList();

                return new Response<List<DtoApartment>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
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
