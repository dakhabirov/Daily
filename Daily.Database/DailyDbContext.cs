using Daily.Database.EntityTypeConfiguration;
using Microsoft.EntityFrameworkCore;
using Daily.Models;

namespace Daily.Database
{
    public class DailyDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DailyDbContext(DbContextOptions<DailyDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
