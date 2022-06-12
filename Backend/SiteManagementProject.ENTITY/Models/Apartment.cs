using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class Apartment : EntityBase
    {
        public Apartment()
        {
            Flats = new HashSet<Flat>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string FlatCount { get; set; }
        public int SiteId { get; set; }

        public virtual Site Site { get; set; }
        public virtual ICollection<Flat> Flats { get; set; }
    }
}
