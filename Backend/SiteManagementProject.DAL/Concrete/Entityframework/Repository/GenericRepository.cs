using Microsoft.EntityFrameworkCore;
using SiteManagementProject.DAL.Abstract;
using SiteManagementProject.ENTITY.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Concrete.Entityframework.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : EntityBase
    {

        protected DbContext context;
        protected DbSet<T> dbSet;

        public GenericRepository(DbContext context)
        {
            this.context = context;
            this.dbSet = this.context.Set<T>();
        }

        public T Add(T item)
        {
            context.Entry(item).State = EntityState.Added;
            dbSet.Add(item);
            return item;
        }

        public async Task<T> AddAsync(T item)
        {
            context.Entry(item).State = EntityState.Added;
            await dbSet.AddAsync(item);
            return item;
        }

        public bool DeleteById(int id)
        {
            return Delete(Find(id));
        }

        public bool Delete(T item)
        {
            if (context.Entry(item).State == EntityState.Detached)
            {
                context.Attach(item);
            }
            return dbSet.Remove(item) != null;
        }

        public T Find(int id)
        {
            return dbSet.Find(id);
        }

        public List<T> GetAll()
        {
            return dbSet.ToList();
        }

        public List<T> GetAll(Expression<Func<T, bool>> expression)
        {
            return dbSet.Where(expression).ToList();
        }

        public T Update(T item)
        {
            dbSet.Update(item);
            return item;
        }

    }
}
