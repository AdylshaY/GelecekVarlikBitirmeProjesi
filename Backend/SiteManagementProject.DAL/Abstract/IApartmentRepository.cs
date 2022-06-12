using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Abstract
{
    public interface IApartmentRepository
    {
        List<Flat> GetFlats(int id);
    }
}
