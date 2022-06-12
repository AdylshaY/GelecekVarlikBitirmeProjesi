using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoSite : DtoBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ApartmentCount { get; set; }
    }
}
