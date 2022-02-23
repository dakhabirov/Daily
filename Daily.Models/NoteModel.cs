using Daily.Models.Base;
using System;

namespace Daily.Models
{
    public class NoteModel : BaseModel
    {
        public string Content { get; set; }

        public Guid UserId { get; set; }

        public UserModel User { get; set; }
    }
}
