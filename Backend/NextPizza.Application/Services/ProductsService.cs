using NextPizza.Core.Abstractions;
using NextPizza.Core.Models;

namespace NextPizza.Application.Services
{
    public class ProductsService : IProductsService
    {
        private readonly IProductsRepository _productsRepository;

        public ProductsService(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public async Task<List<Products>> GetAllProducts()
        {
            return await _productsRepository.Get();
        }

        public async Task<long> CreateProduct(Products product)
        {
            return await _productsRepository.Create(product);
        }

        public async Task<long> UpdateProduct(long id, string name, string imageUrl, DateTime updatedAt)
        {
            return await _productsRepository.Update(id, name, imageUrl, updatedAt);
        }

        public async Task<long> DeleteProduct(long id)
        {
            return await _productsRepository.Delete(id);
        }
    }
}
