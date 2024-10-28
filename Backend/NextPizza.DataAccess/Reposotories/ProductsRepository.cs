using Microsoft.EntityFrameworkCore;
using NextPizza.Core.Abstractions;
using NextPizza.Core.Models;
using NextPizza.DataAccess.Entites;

namespace NextPizza.DataAccess.Reposotories
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly NextPizzaDbContext _context;

        public ProductsRepository(NextPizzaDbContext context)
        {
            _context = context;
        }

        public async Task<List<Products>> Get()
        {
            var productsEntities = await _context.Products
                .AsNoTracking()
                .ToListAsync();

            var products = productsEntities
                .Select(b => Products.Create(b.Id, b.Name, b.ImageUrl, b.CreatedAt, b.UpdatedAt).Product)
                .ToList();

            return products;
        }

        public async Task<long> Create(Products product)
        {
            var productEntity = new ProductsEntity
            {
                Id = product.Id,
                Name = product.Name,
                ImageUrl = product.ImageUrl,
                CreatedAt = product.CreatedAt,
                UpdatedAt = product.UpdatedAt
            };

            await _context.Products.AddAsync(productEntity);
            await _context.SaveChangesAsync();

            return productEntity.Id;
        }

        public async Task<long> Update(long id, string name, string imageUrl, DateTime createdAt, DateTime updatedAt)
        {
            await _context.Products
                .Where(b => b.Id == id)
                .ExecuteUpdateAsync(s => s
                .SetProperty(b => b.Name, b => name)
                .SetProperty(b => b.ImageUrl, b => imageUrl)
                .SetProperty(b => b.CreatedAt, b => createdAt)
                .SetProperty(b => b.UpdatedAt, b => updatedAt));

            return id;
        }

        public async Task<long> Delete(long id)
        {
            await _context.Products
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }
    }
}
