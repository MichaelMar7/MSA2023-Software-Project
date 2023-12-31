﻿using Microsoft.EntityFrameworkCore;
using Back_End.Models;

namespace Back_End.Contexts
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserData> UserDatas { get; set; }
        public DbSet<CocPlayerTag> CocPlayerTags { get; set; }
        public DbSet<CrPlayerTag> CrPlayerTags { get; set; }
        public DbSet<BsPlayerTag> BsPlayerTags { get; set; }
    }
}
