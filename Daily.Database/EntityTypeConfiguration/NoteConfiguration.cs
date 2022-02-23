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
            builder.Property(note => note.Content).IsRequired();
            builder.Property(note => note.UserId).IsRequired();
        }
    }
}
