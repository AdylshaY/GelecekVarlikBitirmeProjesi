using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.Models;
using SiteManagementProject.INTERFACE;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.BLL
{
    public class FlatTypeManager : GenericManager<FlatType, DtoFlatType>, IFlatTypeService
    {
        public FlatTypeManager(IServiceProvider service) : base(service)
        {
        }
    }
}
