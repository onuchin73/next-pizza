using Microsoft.EntityFrameworkCore;
using NextPizza.DataAccess.Entites;

namespace NextPizza.DataAccess
{
    public class NextPizzaDbContext : DbContext
    {
        public NextPizzaDbContext(DbContextOptions<NextPizzaDbContext> options) : base(options)
        {
        }

        public DbSet<UsersEntity> Users { get; set; }
        public DbSet<ProductsEntity> Products { get; set; }
    }
}