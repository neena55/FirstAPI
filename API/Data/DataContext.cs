using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace API;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<AppUser> Usersnew{get; set;}
}
