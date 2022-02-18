using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Daily.Models;

namespace Daily.Database.EntityTypeConfiguration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(user => user.Id);
            builder.Property(user => user.Login).HasMaxLength(50);
            builder.Property(user => user.Password).HasMaxLength(50);
        }
    }
}
