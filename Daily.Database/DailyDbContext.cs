using Microsoft.EntityFrameworkCore;
using Daily.Models;
using Daily.Database.EntityTypeConfiguration;

namespace Daily.Database
{
    public class DailyDbContext : DbContext
    {
        public DbSet<UserModel> Users { get; set; }

        public DbSet<NoteModel> Notes { get; set; }

        public DailyDbContext(DbContextOptions<DailyDbContext> options)
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new NoteConfiguration());
        }
    }
}
