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

        public async Task<User> GetUserData(string id)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.UserId == id);
            return user;
        }

        public async Task<List<CocPlayerTag>> GetAllCocPlayerTag(string id)
        {
            return await _users.CocPlayerTags.Where(t => t.UserId == id).ToListAsync();
        }

        public async Task<List<CrPlayerTag>> GetAllCrPlayerTag(string id)
        {
            return await _users.CrPlayerTags.Where(t => t.UserId == id).ToListAsync();
        }

        public async Task<List<BsPlayerTag>> GetAllBsPlayerTag(string id)
        {
            return await _users.BsPlayerTags.Where(t => t.UserId == id).ToListAsync();
        }

        public async Task<CocPlayerTag> GetCocPlayerTag(string id, string tag)
        {
            return await _users.CocPlayerTags.SingleOrDefaultAsync(t => t.UserId == id && t.Tag == tag);

        }

        public async Task<CrPlayerTag> GetCrPlayerTag(string id, string tag)
        {
            return await _users.CrPlayerTags.SingleOrDefaultAsync(t => t.UserId == id && t.Tag == tag);
        }

        public async Task<BsPlayerTag> GetBsPlayerTag(string id, string tag)
        {
            return await _users.BsPlayerTags.SingleOrDefaultAsync(t => t.UserId == id && t.Tag == tag);
        }

        public async Task AddCocPlayerTag(string id, string tag)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                CocPlayerTag newPlayerTag = new CocPlayerTag { Id = Guid.NewGuid().ToString(), Tag = tag, UserId = user.UserId };
                await _users.CocPlayerTags.AddAsync(newPlayerTag);
                await _users.SaveChangesAsync();
            }
            
        }

        public async Task AddCrPlayerTag(string id, string tag)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                CrPlayerTag newPlayerTag = new CrPlayerTag { Id = Guid.NewGuid().ToString(), Tag = tag, UserId = user.UserId };
                await _users.CrPlayerTags.AddAsync(newPlayerTag);
                await _users.SaveChangesAsync();
            }
        }

        public async Task AddBsPlayerTag(string id, string tag)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                BsPlayerTag newPlayerTag = new BsPlayerTag { Id = Guid.NewGuid().ToString(), Tag = tag, UserId = user.UserId };
                await _users.BsPlayerTags.AddAsync(newPlayerTag);
                await _users.SaveChangesAsync();
            }
        }

        public async Task RemoveCocPlayerTag(string id, string tag)
        {
            User user = await _users.Users.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                _users.CocPlayerTags.Remove(_users.CocPlayerTags.Single(t => t.UserId == id && t.Tag == tag));
                await _users.SaveChangesAsync();
            }
        }

        public async Task RemoveCrPlayerTag(string id, string tag)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                _users.CrPlayerTags.Remove(_users.CrPlayerTags.Single(t => t.UserId == id && t.Tag == tag));
                await _users.SaveChangesAsync();
            }
        }

        public async Task RemoveBsPlayerTag(string id, string tag)
        {
            UserData user = await _users.UserDatas.SingleOrDefaultAsync(u => u.UserId == id);
            if (user != null)
            {
                _users.BsPlayerTags.Remove(_users.BsPlayerTags.Single(t => t.UserId == id && t.Tag == tag));
                await _users.SaveChangesAsync();
            }
        }
        

    }
}
