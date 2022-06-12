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
    public class SiteRepository : GenericRepository<Site>, ISiteRepository
    {
        public SiteRepository(DbContext context) : base(context)
        {
        }

        public List<Apartment> GetApartments(int id)
        {
            var dbSet = context.Set<Site>();
            var flats = dbSet.Where(a => a.Id == id).SelectMany(a => a.Apartments).ToList();
            return flats;
        }
    }
}
