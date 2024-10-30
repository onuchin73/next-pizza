using NextPizza.Core.Abstractions;

namespace NextPizza.Core.Models
{
    public class Users : LongBaseId
    {
        public const int MAX_NAME_LENGTH = 250;

        public string FullName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
