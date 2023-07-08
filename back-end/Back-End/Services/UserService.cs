using Back_End.Contexts;
using Back_End.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Services
{
    public class UserService : IUserService
    {
        private UserContext _users;
        public UserService(UserContext users)
        {
            _users = users;
        }

        public async Task<ActionResult<User>> Authenticate(string username, string password)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.Username == username && u.Password == password);
            return user;

        }

        public async Task<ActionResult<User>> Register(string username, string password)
        {
            // NOT DONE YET
            User user = new User { UserId = Guid.NewGuid().ToString(), Username = username, Password = password };
            await _users.Users.AddAsync(user);
            return user;
        }
    }
}
