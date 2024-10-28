using NextPizza.Core.Abstractions;

namespace NextPizza.DataAccess.Entites
{
    public class ProductsEntity : LongBaseId
    {
        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
