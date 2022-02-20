using Daily.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Daily.Database.EntityTypeConfiguration
{
    class RoleConfiguration : IEntityTypeConfiguration<RoleModel>
    {
        public void Configure(EntityTypeBuilder<RoleModel> builder)
        {
            builder.HasKey(role => role.Id);
            builder.Property(role => role.Name).HasMaxLength(50).IsRequired();
        }
    }
}
