using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.IBase;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.INTERFACE
{
    public interface IFlatService : IGenericService<Flat, DtoFlat>
    {
        IResponse<List<DtoBill>> GetBillsByFlatId(int id);
    }
}
