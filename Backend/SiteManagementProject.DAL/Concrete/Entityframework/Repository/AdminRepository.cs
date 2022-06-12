using Microsoft.EntityFrameworkCore;
using SiteManagementProject.DAL.Abstract;
using SiteManagementProject.ENTITY.Dto;
using SiteManagementProject.ENTITY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Concrete.Entityframework.Repository
{
    public class AdminRepository : GenericRepository<Admin>, IAdminRepository
    {
        public AdminRepository(DbContext context) : base(context)
        {
        }

        public Admin Login(Admin login)
        {
            var user = dbSet.Where(x => x.Email == login.Email && x.Password == login.Password).SingleOrDefault();
            return user;
        }
    }
}
