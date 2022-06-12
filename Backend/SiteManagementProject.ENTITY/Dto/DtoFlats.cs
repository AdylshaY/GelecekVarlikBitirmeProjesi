using SiteManagementProject.ENTITY.Base;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoFlats : DtoBase
    {
        public int Id { get; set; }
        public int ApartmentsId { get; set; }
        public int UsersId { get; set; }
        public int FlatNo { get; set; }
        public int FlatTypeId { get; set; }
        public virtual ICollection<Bill> Bills { get; set; }

    }
}
