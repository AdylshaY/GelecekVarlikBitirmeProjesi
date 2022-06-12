using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoFlat : DtoBase
    {
        public int Id { get; set; }
        public int FlatNo { get; set; }
        public int ApartmentsId { get; set; }
        public int? UsersId { get; set; }
        public bool IsEmpty { get; set; }
        public int FlatTypeId { get; set; }
    }
}
