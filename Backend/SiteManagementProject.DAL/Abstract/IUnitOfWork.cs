using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Abstract
{
    public interface IUnitOfWork : IDisposable
    {
        // generic methot tasarimi
        IGenericRepository<T> GetRepository<T>() where T : EntityBase;
        // baslatmak
        bool BeginTransaction();
        // hata durumunda geri almak
        bool RollBackTransaction();
        // kaydetmek
        int SaveChanges();

    }
}