using Daily.Models.Base;
using System.Collections.Generic;

namespace Daily.Models
{
    public class UserModel : BaseModel
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }

        public ICollection<NoteModel> Notes { get; set; }
    }
}
