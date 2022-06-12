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
    public class ApartmentRepository : GenericRepository<Apartment>, IApartmentRepository
    {
        public ApartmentRepository(DbContext context) : base(context)
        {
        }

        public List<Flat> GetFlats(int id)
        {
            var dbSet = context.Set<Apartment>();
            var flats = dbSet.Where(a => a.Id == id).SelectMany(a => a.Flats).ToList();
            return flats;
        }
    }
}
