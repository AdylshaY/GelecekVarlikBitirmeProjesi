﻿using SiteManagementProject.ENTITY.IBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.DAL.Abstract
{
    public interface IGenericRepository<T> where T : IEntityBase
    {
        // Listeleme
        List<T> GetAll();
        // Filtreli Listeleme
        List<T> GetAll(Expression<Func<T, bool>> expression);
        // Getirme 
        T Find(int id);
        // Kaydetme
        T Add(T item);
        // Async Kayetme
        Task<T> AddAsync(T item);
        // Guncelleme
        T Update(T item);
        // Silme
        bool DeleteById(int id);
    }
}
