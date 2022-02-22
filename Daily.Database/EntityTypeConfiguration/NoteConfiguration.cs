using Daily.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Daily.Database.EntityTypeConfiguration
{
    class NoteConfiguration : IEntityTypeConfiguration<NoteModel>
    {
        public void Configure(EntityTypeBuilder<NoteModel> builder)
        {
            builder.HasKey(note => note.Id);
        }
    }
}
