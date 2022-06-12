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
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context)
        {
        }

        public List<Flat> GetUsersFlats(int id)
        {
            var dbSet = context.Set<User>();
            var flats = dbSet.Where(a => a.Id == id).SelectMany(a => a.Flats).ToList();
            return flats;
        }

        public User Login(User login)
        {
            var user = dbSet.Where(x => x.Email == login.Email && x.Password == login.Password).SingleOrDefault();
            return user;
        }
    }
}
