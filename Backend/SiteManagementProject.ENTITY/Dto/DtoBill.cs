using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.ENTITY.Dto
{
    public class DtoBill : DtoBase
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int FlatsId { get; set; }
        public double Amount { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Date { get; set; }
        public bool IsPaid { get; set; }
    }
}
