using Microsoft.EntityFrameworkCore;
using Daily.Models;
using Daily.Database.EntityTypeConfiguration;

namespace Daily.Database
{
    public class DailyDbContext : DbContext
    {
        public DbSet<UserModel> Users { get; set; }

        public DbSet<RoleModel> Roles { get; set; }

        public DailyDbContext(DbContextOptions<DailyDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
        }
    }
}
