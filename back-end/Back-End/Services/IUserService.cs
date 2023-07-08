using Back_End.Models;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.ConstrainedExecution;

namespace Back_End.Services
{
    public interface IUserService
    {
        Task<ActionResult<User>> Authenticate(string username, string password);
        Task<ActionResult<User>> Register(string username, string password);
    }
}
