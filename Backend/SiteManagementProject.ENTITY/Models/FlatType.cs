using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class FlatType : EntityBase
    {
        public FlatType()
        {
            Flats = new HashSet<Flat>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int RoomCount { get; set; }
        public int LivingRoomCount { get; set; }

        public virtual ICollection<Flat> Flats { get; set; }
    }
}
