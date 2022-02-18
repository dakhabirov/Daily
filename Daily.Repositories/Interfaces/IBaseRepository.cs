using Daily.Models.Base;
using System;
using System.Collections.Generic;

namespace Daily.Repositories.Interfaces
{
    public interface IBaseRepository<TDbModel> where TDbModel : BaseModel
    {
        public List<TDbModel> GetAll();

        public TDbModel Get(Guid id);

        public TDbModel Create(TDbModel model);

        public TDbModel Update(TDbModel model);

        public void Delete(Guid id);
    }
}
