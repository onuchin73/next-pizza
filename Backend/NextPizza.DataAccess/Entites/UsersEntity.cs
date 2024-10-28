using NextPizza.Core.Abstractions;

namespace NextPizza.DataAccess.Entites
{
    public class UsersEntity : LongBaseId
    {
        public string FullName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
