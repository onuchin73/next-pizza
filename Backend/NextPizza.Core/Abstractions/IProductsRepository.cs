using NextPizza.Core.Models;

namespace NextPizza.Core.Abstractions
{
    public interface IProductsRepository
    {
        Task<long> Create(Products product);
        Task<long> Delete(long id);
        Task<List<Products>> Get();
        Task<long> Update(long id, string name, string imageUrl, DateTime updatedAt);
    }
}