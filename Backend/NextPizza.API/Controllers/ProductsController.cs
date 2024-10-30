using Microsoft.AspNetCore.Mvc;
using NextPizza.API.Contracts;
using NextPizza.Core.Abstractions;
using NextPizza.Core.Models;

namespace NextPizza.API.Controllers
{
    public class ProductsController : RestControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductsResponse>>> GetProducts()
        {
            var products = await _productsService.GetAllProducts();

            var response = products.Select(b => new ProductsResponse(b.Id, b.Name, b.ImageUrl, b.CreatedAt, b.UpdatedAt));

            return Success(response);
        }

        [HttpPost]
        public async Task<ActionResult<long>> CreateProduct([FromBody] ProductsRequest request)
        {
            if (string.IsNullOrEmpty(request.Name))
                return Fail($"Наименование не должно быть пустым.");

            if (request.Name.Length > Products.MAX_NAME_LENGTH)
                return Fail($"Наименование должно быть не более {Products.MAX_NAME_LENGTH} символов.");

            var product = new Products()
            {
                Name = request.Name,
                ImageUrl = request.ImageUrl,
                CreatedAt = DateTime.UtcNow
            };

            product.Id = await _productsService.CreateProduct(product);

            return Success(product);
        }

        [HttpPut("{id:long}")]
        public async Task<ActionResult<long>> UpdateProduct(long id, [FromBody] ProductsRequest request)
        {
            if (string.IsNullOrEmpty(request.Name))
                return Fail($"Наименование не должно быть пустым.");

            if (request.Name.Length > Products.MAX_NAME_LENGTH)
                return Fail($"Наименование должно быть не более {Products.MAX_NAME_LENGTH} символов.");

            var product = new Products()
            {
                Id = id,
                Name = request.Name,
                ImageUrl = request.ImageUrl,
                UpdatedAt = DateTime.UtcNow
            };

            await _productsService.UpdateProduct(product.Id, product.Name, product.ImageUrl, product.UpdatedAt);

            return Success(product);
        }

        [HttpDelete("{id:long}")]
        public async Task<ActionResult<long>> DeleteProduct(long id)
        {
            return Success(await _productsService.DeleteProduct(id));
        }
    }
}
