using System.Diagnostics.CodeAnalysis;
using API.Entities;
using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Options;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(/*[NotNullAttribute] */DbContextOptions options) : base(options)
        {

        }
        public DbSet<AppUser> Users { get; set; }

    }
}