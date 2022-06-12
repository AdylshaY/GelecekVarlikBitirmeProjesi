using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoLogin : DtoBase
    {

        [Required]
        [StringLength(maximumLength: 40)]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [StringLength(maximumLength: 40)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
