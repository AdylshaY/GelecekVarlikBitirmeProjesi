using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using SiteManagementProject.DAL.Abstract;
using SiteManagementProject.DAL.Concrete.Entityframework.Repository;
using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Concrete.Entityframework.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        #region Variables
        DbContext context;
        IDbContextTransaction transaction;
        // transaction yonetimi ile alakasi yoktur, nesne yonetimi icin olusturuldu
        bool dispose;
        #endregion

        public UnitOfWork(DbContext context)
        {
            this.context = context;
        }

        public bool BeginTransaction()
        {
            try
            {
                transaction = context.Database.BeginTransaction();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        // dispose'lar olmezse sistemi fazla sisirir, ram kullanimi artar.

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);  // Garbage Collection calistirir
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!dispose)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }

            dispose = true;
        }

        public IGenericRepository<T> GetRepository<T>() where T : EntityBase
        {
            return new GenericRepository<T>(context);
        }

        public bool RollBackTransaction()
        {
            // hata oldugu anda hata oncesinde olan islemleri geri almak icin kullanilir.
            try
            {
                transaction.Rollback();
                transaction = null;
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public int SaveChanges()
        {
            var _transaction = transaction != null ? transaction : context.Database.BeginTransaction();
            using (_transaction)
            {
                try
                {
                    if (context == null)
                    {
                        throw new ArgumentException("Context is null");
                    }

                    int result = context.SaveChanges();

                    // transaction'in onaylandigi yerdir
                    _transaction.Commit();

                    return result;
                }
                catch (Exception ex)
                {
                    // hata yakalanirsa islemleri geri alir ve hatayi firlatir
                    transaction.Rollback();

                    throw new Exception("Error on save changes", ex);
                }
            }
        }
    }
}
