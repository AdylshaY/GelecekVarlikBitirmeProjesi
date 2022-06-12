using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoFlatType : DtoBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int RoomCount { get; set; }
        public int LivingRoomCount { get; set; }
    }
}
