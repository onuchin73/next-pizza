using NextPizza.Core.Models;

namespace NextPizza.Application.Services
{
    public interface IUsersService
    {
        Task<long> CreateUser(Users users);
        Task<long> DeleteUser(long id);
        Task<List<Users>> GetAllUsers();
        Task<long> UpdateUser(long id, string fullName, string email, string password, DateTime createdAt, DateTime updatedAt);
    }
}