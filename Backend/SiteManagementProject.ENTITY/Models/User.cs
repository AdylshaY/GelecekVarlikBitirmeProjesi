using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class User : EntityBase
    {
        public User()
        {
            Flats = new HashSet<Flat>();
        }

        public int Id { get; set; }
        public string CitizenId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CarPlate { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }
        public string Username { get; set; }

        public virtual ICollection<Flat> Flats { get; set; }
    }
}
