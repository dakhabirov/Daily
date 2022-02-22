using Daily.Models.Base;

namespace Daily.Models
{
    public class NoteModel : BaseModel
    {
        public string Name { get; set; }

        public string Content { get; set; }
    }
}
