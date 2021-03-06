using SiteManagementProject.ENTITY.IBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SiteManagementProject.INTERFACE
{
    public interface IGenericService<T, TDto> where T : IEntityBase where TDto : IDtoBase
    {
        // Listeleme
        IResponse<List<TDto>> GetAll();
        // Filtreli Listeleme
        IResponse<List<TDto>> GetAll(Expression<Func<T, bool>> expression);
        // Getirme 
        IResponse<TDto> Find(int id);
        // Kaydetme
        IResponse<TDto> Add(TDto item, bool saveChanges = true);
        // Async Kayetme
        Task<IResponse<TDto>> AddAsync(TDto item, bool saveChanges = true);
        // Guncelleme
        IResponse<TDto> Update(TDto item, bool saveChanges = true);
        // Async Guncelleme
        // Silme
        IResponse<bool> DeleteById(int id, bool saveChanges = true);
        // Async Silme
        void Save();
    }
}
