using Back_End.Models;
using Back_End.Services;

using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static User authuser;
        public static JwtSecurityToken token;

        private readonly IUserService _service;
        private readonly IConfiguration _configuration;
        //private UserContext _users;

        public UserController(IUserService service, IConfiguration configuration)
        {
            _service = service;
            _configuration = configuration;
        }

        [HttpPost("/Login")]
        public async Task<ActionResult<object>> Login(string username, string password)
        {
            var user = await _service.Authenticate(username, password);

            if (user == null)
            {
                return NotFound();
            }

            authuser = user;
            string token = CreateToken(user);
            //return Ok(token);
            return Ok(new { User = user, Token = token });  
        }

        [HttpPost("/Register")]
        public async Task<ActionResult<User>> Register(string username, string password)
        {
            var user = await _service.Register(username, password);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        /*
        [HttpPost("/Logout/")]
        public async Task<ActionResult<User>> Logout()
        {
            authuser = null;
            token = null;
            return Ok();
        }
        */

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim> { new Claim(ClaimTypes.Name, user.Username) };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
