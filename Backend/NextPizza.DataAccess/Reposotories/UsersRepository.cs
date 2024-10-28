using Microsoft.EntityFrameworkCore;
using NextPizza.Core.Abstractions;
using NextPizza.Core.Models;
using NextPizza.DataAccess.Entites;

namespace NextPizza.DataAccess.Reposotories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly NextPizzaDbContext _context;

        public UsersRepository(NextPizzaDbContext context)
        {
            _context = context;
        }

        public async Task<List<Users>> Get()
        {
            var usersEntities = await _context.Users
                .AsNoTracking()
                .ToListAsync();

            var users = usersEntities
                .Select(b => Users.Create(b.Id, b.FullName, b.Email, b.Password, b.CreatedAt, b.UpdatedAt).User)
                .ToList();

            return users;
        }

        public async Task<long> Create(Users user)
        {
            var userEntity = new UsersEntity
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                CreatedAt = user.CreatedAt,
                UpdatedAt = user.UpdatedAt
            };

            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();

            return userEntity.Id;
        }

        public async Task<long> Update(long id, string fullName, string email, string password, DateTime createdAt, DateTime updatedAt)
        {
            await _context.Users
                .Where(b => b.Id == id)
                .ExecuteUpdateAsync(s => s
                .SetProperty(b => b.FullName, b => fullName)
                .SetProperty(b => b.Email, b => email)
                .SetProperty(b => b.Password, b => password)
                .SetProperty(b => b.CreatedAt, b => createdAt)
                .SetProperty(b => b.UpdatedAt, b => updatedAt));

            return id;
        }

        public async Task<long> Delete(long id)
        {
            await _context.Users
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }
    }
}
