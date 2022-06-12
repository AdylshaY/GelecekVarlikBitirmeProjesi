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
    public class FlatManager : GenericManager<Flat, DtoFlat>, IFlatService
    {
        private IConfiguration configuration;
        public readonly IFlatRepository flatRepository;
        public FlatManager(IServiceProvider service, IConfiguration configuration, DbContext context) : base(service)
        {
            flatRepository = service.GetService<IFlatRepository>();
            this.configuration = configuration;
        }

        public IResponse<List<DtoBill>> GetBillsByFlatId(int id)
        {
            try
            {
                var list = flatRepository.GetBillsByFlatId(id);
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<DtoBill>(x)).ToList();

                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
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
