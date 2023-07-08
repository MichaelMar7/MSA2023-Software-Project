using Back_End.Models;
using Back_End.Contexts;
using Back_End.Services;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _service;
        //private UserContext _users;

        public UserController(UserService service)
        {
            _service = service;
            //_users = users;
        }

        [HttpGet("/Authenticate/")]
        public async Task<ActionResult<User>> Authenticate(string username, string password)
        {
            var user = await _service.Authenticate(username, password);
            //var user = await _users.Users.SingleOrDefaultAsync(u => u.Username == username && u.Password == password);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("/Register/")]
        public async Task<ActionResult<User>> Register(string username, string password)
        {
            var user = await _service.Register(username, password);
            //var user = await _users.Users.SingleOrDefaultAsync(u => u.Username == username && u.Password == password);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
