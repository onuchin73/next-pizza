using NextPizza.Core.Abstractions;
using NextPizza.Core.Models;

namespace NextPizza.Application.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _usersRepository;

        public UsersService(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        public async Task<List<Users>> GetAllUsers()
        {
            return await _usersRepository.Get();
        }

        public async Task<long> CreateUser(Users users)
        {
            return await _usersRepository.Create(users);
        }

        public async Task<long> UpdateUser(long id, string fullName, string email, string password, DateTime updatedAt)
        {
            return await _usersRepository.Update(id, fullName, email, password, updatedAt);
        }

        public async Task<long> DeleteUser(long id)
        {
            return await _usersRepository.Delete(id);
        }
    }
}
