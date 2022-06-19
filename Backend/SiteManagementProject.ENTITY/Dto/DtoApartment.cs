using SiteManagementProject.ENTITY.Base;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoApartment : DtoBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FlatCount { get; set; }   
        public int SiteId { get; set; }
        public virtual Site Site { get; set; }
    }
}
