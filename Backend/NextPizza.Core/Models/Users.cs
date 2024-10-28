using NextPizza.Core.Abstractions;

namespace NextPizza.Core.Models
{
    public class Users : LongBaseId
    {
        public const int MAX_NAME_LENGTH = 250;

        private Users(long id, string fullName, string email, string password, DateTime createdAt, DateTime updatedAt)
        {
            Id = id;
            FullName = fullName;
            Email = email;
            Password = password;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
        }

        public string FullName { get; }

        public string Email { get; }

        public string Password { get; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public static (Users User, string Error) Create(long id, string fullName, string email, string password, DateTime createdAt, DateTime updatedAt)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(fullName) || fullName.Length > MAX_NAME_LENGTH)
                error = $"Наименование должно быть не более {MAX_NAME_LENGTH} символов.";

            var product = new Users(id, fullName, email, password, createdAt, updatedAt);

            return (product, error);
        }
    }
}
