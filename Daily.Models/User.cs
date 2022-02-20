using Daily.Models.Base;
using System;

namespace Daily.Models
{
    public class User : BaseModel
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
    }
}
