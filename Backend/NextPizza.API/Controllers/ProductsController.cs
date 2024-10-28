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

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<long>> CreateProduct([FromBody] ProductsRequest request)
        {
            var (product, error) = Products.Create(
                request.Id,
                request.Name,
                request.ImageUrl,
                request.createdAt,
                request.updatedAt);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var productId = await _productsService.CreateProduct(product);

            return Ok(productId);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<long>> UpdateProduct(long id, [FromBody] ProductsRequest request)
        {
            var productId = await _productsService.UpdateProduct(id, request.Name, request.ImageUrl, request.createdAt, request.updatedAt);

            return Ok(productId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<long>> DeleteProduct(long id)
        {
            return Ok(await _productsService.DeleteProduct(id));
        }
    }
}
