using Back_End.Contexts;
using Back_End.Models;

using Microsoft.EntityFrameworkCore;

namespace Back_End.Services
{
    public class UserDataService
    {
        private UserContext _users;

        public UserDataService(UserContext users)
        {
            _users = users;
        }

        public async Task<UserData> GetUserData(string id)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            return user;
        }

        public async Task UpdateCocPlayerTag(string id, string newTag)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                user.CocTag = newTag;
                _users.UserDatas.Entry(user).State = EntityState.Modified;
                await _users.SaveChangesAsync();
            }
            
        }

        public async Task UpdateCrPlayerTag(string id, string newTag)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                user.CrTag = newTag;
                _users.UserDatas.Entry(user).State = EntityState.Modified;
                await _users.SaveChangesAsync();
            }
        }

        public async Task UpdateBsPlayerTag(string id, string newTag)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                user.BsTag = newTag;
                _users.UserDatas.Entry(user).State = EntityState.Modified;
                await _users.SaveChangesAsync();
            }
        }

        
    }
}
