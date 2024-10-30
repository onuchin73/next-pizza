using NextPizza.Core.Abstractions;

namespace NextPizza.Core.Models
{
    public class Products : LongBaseId
    {
        public const int MAX_NAME_LENGTH = 250;

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
