using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace SiteManagementProject.ENTITY.Models
{
    public partial class Bill : EntityBase
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int FlatsId { get; set; }
        public double Amount { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Date { get; set; }
        public bool IsPaid { get; set; }

        public virtual Flat Flats { get; set; }
    }
}
