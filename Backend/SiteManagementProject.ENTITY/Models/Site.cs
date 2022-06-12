using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class Site : EntityBase
    {
        public Site()
        {
            Apartments = new HashSet<Apartment>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int ApartmentCount { get; set; }

        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
