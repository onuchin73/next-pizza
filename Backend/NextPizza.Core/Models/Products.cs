using NextPizza.Core.Abstractions;

namespace NextPizza.Core.Models
{
    public class Products : LongBaseId
    {
        public const int MAX_NAME_LENGTH = 250;

        private Products(long id, string name, string imageUrl, DateTime createdAt, DateTime updatedAt)
        {
            Id = id;
            Name = name;
            ImageUrl = imageUrl;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
        }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public static (Products Product, string Error) Create(long id, string name, string imageUrl, DateTime createdAt, DateTime updatedAt)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(name) || name.Length > MAX_NAME_LENGTH)
                error = $"Наименование должно быть не более {MAX_NAME_LENGTH} символов.";

            var product = new Products(id, name, imageUrl, createdAt, updatedAt);

            return (product, error);
        }
    }
}
