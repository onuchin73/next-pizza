using NextPizza.Core.Models;

namespace NextPizza.Core.Abstractions
{
    public interface IProductsService
    {
        Task<long> CreateProduct(Products product);
        Task<long> DeleteProduct(long id);
        Task<List<Products>> GetAllProducts();
        Task<long> UpdateProduct(long id, string name, string imageUrl, DateTime createdAt, DateTime updatedAt);
    }
}