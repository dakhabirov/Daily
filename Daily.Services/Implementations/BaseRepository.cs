using Daily.Database;
using Daily.Models.Base;
using Daily.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Daily.Repositories.Implementations
{
    public class BaseRepository<TDbModel> : IBaseRepository<TDbModel> where TDbModel : BaseModel
    {
        private DailyDbContext Context { get; set; }

        public BaseRepository(DailyDbContext context)
        {
            Context = context;
        }

        public TDbModel Get(Guid id)
        {
            return Context.Set<TDbModel>().FirstOrDefault(m => m.Id == id);
        }
        
        public TDbModel Create(TDbModel model)
        {
            Context.Set<TDbModel>().Add(model);
            Context.SaveChanges();
            return model;
        }

        public void Delete(Guid id)
        {
            var toDelete = Context.Set<TDbModel>().FirstOrDefault(m => m.Id == id);
            Context.Set<TDbModel>().Remove(toDelete);
            Context.SaveChanges();
        }

        public List<TDbModel> GetAll()
        {
            return Context.Set<TDbModel>().ToList();
        }

        public TDbModel Update(TDbModel model)
        {
            var toUpdate = Context.Set<TDbModel>().FirstOrDefault(m => m.Id == model.Id);
            if (toUpdate != null)
                toUpdate = model;
            Context.Update(toUpdate);
            Context.SaveChanges();
            return toUpdate;
        }
    }
}
