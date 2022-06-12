using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoLoginUser : DtoBase
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }

    }
}
