using Microsoft.EntityFrameworkCore;
using SiteManagementProject.DAL.Abstract;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Concrete.Entityframework.Repository
{
    public class FlatRepository : GenericRepository<Flat>, IFlatRepository
    {
        public FlatRepository(DbContext context) : base(context)
        {
        }

        public List<Bill> GetBillsByFlatId(int id)
        {
            var dbSet = context.Set<Flat>();
            var bills = dbSet.Where(f => f.Id == id).SelectMany(f => f.Bills).ToList();
            return bills;
        }
    }
}
