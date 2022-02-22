using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Daily.Models;

namespace Daily.Database.EntityTypeConfiguration
{
    class UserConfiguration : IEntityTypeConfiguration<UserModel>
    {
        public void Configure(EntityTypeBuilder<UserModel> builder)
        {
            builder.HasKey(user => user.Id);
            builder.Property(user => user.Username).HasMaxLength(50).IsRequired();
            builder.Property(user => user.Password).HasMaxLength(50).IsRequired();
            builder.Property(user => user.Role).HasMaxLength(50).IsRequired();
        }
    }
}
