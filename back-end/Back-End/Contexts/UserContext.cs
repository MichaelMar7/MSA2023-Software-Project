using Microsoft.EntityFrameworkCore;

namespace Back_End.Contexts
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
    }
}
