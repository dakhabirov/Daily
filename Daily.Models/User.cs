using Daily.Models.Base;
using System;

namespace Daily.Models
{
    public class User : BaseModel
    {
        public string Login { get; set; }

        public string Password { get; set; }
    }
}
