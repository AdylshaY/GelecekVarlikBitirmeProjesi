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
    public class FlatTypeRepository : GenericRepository<FlatType>, IFlatTypeRepository
    {
        public FlatTypeRepository(DbContext context) : base(context)
        {
        }
    }
}
