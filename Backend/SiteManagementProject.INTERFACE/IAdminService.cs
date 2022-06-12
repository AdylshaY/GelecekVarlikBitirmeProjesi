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
    public interface IAdminService : IGenericService<Admin, DtoAdmin>
    {
        IResponse<DtoUserToken> Login(DtoLogin login);
    }
}
