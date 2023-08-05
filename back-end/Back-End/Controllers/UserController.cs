using Back_End.Models;
using Back_End.Services;

using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

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
        public async Task<ActionResult<object>> Login(UserCred usercred)
        {
            var user = await _service.Authenticate(usercred.Username, usercred.Password);

            if (user == null)
            {
                return NotFound();
            }

            authuser = user;
            string token = CreateToken(user);
            
            Response.Cookies.Append("jwt", token, new CookieOptions { 
                HttpOnly = true, 
                IsEssential = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Domain = "localhost", 
                Expires = DateTime.Now.AddDays(1) ,
            });

            return Ok(new { User = user, Token = token });  
        }

        [HttpPost("/Register")]
        public async Task<ActionResult<User>> Register(UserCred usercred /*string username, string password*/)
        {
            var user = await _service.Register(usercred.Username, usercred.Password);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        
        [HttpPost("/Logout")]
        public async Task<ActionResult<User>> Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok("logout");
        }
        

        [HttpGet("/User")]
        public async Task<IActionResult> User()
        { 
            try
            {
                
                var jwt = Request.Cookies["jwt"];
                var token = Verify(jwt);
                string userId = token.Issuer;
                var user = await _service.GetUserById(userId);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return Unauthorized();
            }
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim> { new Claim(ClaimTypes.Name, user.Username) };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            token = new JwtSecurityToken(
                claims: claims,
                issuer: user.UserId,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private JwtSecurityToken Verify(string token) 
        { 
            var tokenhandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("AppSettings:Token").Value);
            tokenhandler.ValidateToken(token, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }

    }
}
