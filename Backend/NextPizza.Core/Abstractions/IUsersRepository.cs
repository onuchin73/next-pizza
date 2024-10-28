using NextPizza.Core.Models;

namespace NextPizza.Core.Abstractions
{
    public interface IUsersRepository
    {
        Task<long> Create(Users user);
        Task<long> Delete(long id);
        Task<List<Users>> Get();
        Task<long> Update(long id, string fullName, string email, string password, DateTime createdAt, DateTime updatedAt);
    }
}