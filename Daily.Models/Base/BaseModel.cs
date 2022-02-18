using System;

namespace Daily.Models.Base
{
    public abstract class BaseModel
    {
        public Guid Id { get; set; }

        public DateTime CreateDate { get; set; }

        public DateTime EditDate { get; set; }
    }
}
