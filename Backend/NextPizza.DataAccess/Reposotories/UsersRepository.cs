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
                .Select(b => new Users
                {
                    Id = b.Id,
                    FullName = b.FullName,
                    Email = b.Email,
                    Password = b.Password,
                    CreatedAt = b.CreatedAt,
                    UpdatedAt = b.UpdatedAt
                })
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
                Password = user.Password,
                CreatedAt = user.CreatedAt
            };

            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();

            return userEntity.Id;
        }

        public async Task<long> Update(long id, string fullName, string email, string password, DateTime updatedAt)
        {
            await _context.Users
                .Where(b => b.Id == id)
                .ExecuteUpdateAsync(s => s
                .SetProperty(b => b.FullName, b => fullName)
                .SetProperty(b => b.Email, b => email)
                .SetProperty(b => b.Password, b => password)
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
