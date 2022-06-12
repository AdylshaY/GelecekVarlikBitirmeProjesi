using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class Flat : EntityBase
    {
        public Flat()
        {
            Bills = new HashSet<Bill>();
        }

        public int Id { get; set; }
        public int FlatNo { get; set; }
        public int ApartmentsId { get; set; }
        public int? UsersId { get; set; }
        public bool IsEmpty { get; set; }
        public int FlatTypeId { get; set; }

        public virtual Apartment Apartments { get; set; }
        public virtual FlatType FlatType { get; set; }
        public virtual User Users { get; set; }
        public virtual ICollection<Bill> Bills { get; set; }
    }
}
