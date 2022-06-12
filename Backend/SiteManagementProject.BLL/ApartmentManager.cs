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
    public class ApartmentManager : GenericManager<Apartment, DtoApartment>, IApartmentService
    {
        private IConfiguration configuration;
        public readonly IApartmentRepository apartmentRepository;
        public ApartmentManager(IServiceProvider service, IConfiguration configuration, DbContext context) : base(service)
        {
            apartmentRepository = service.GetService<IApartmentRepository>();
            this.configuration = configuration;
        }

        public IResponse<List<DtoFlats>> GetFlats(int id)
        {
            try
            {
                var list = apartmentRepository.GetFlats(id);
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
