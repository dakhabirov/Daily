using System;

namespace Daily.Models.Base
{
    public abstract class BaseModel
    {
        public Guid Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime EditedDate { get; set; }
    }
}
