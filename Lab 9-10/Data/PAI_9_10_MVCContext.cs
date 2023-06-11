using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PAI_9_10_MVC.Models;

namespace PAI_9_10_MVC.Data
{
    public class PAI_9_10_MVCContext : DbContext
    {
        public PAI_9_10_MVCContext (DbContextOptions<PAI_9_10_MVCContext> options)
            : base(options)
        {
        }

        public DbSet<PAI_9_10_MVC.Models.Movie> Movie { get; set; } = default!;
    }
}
