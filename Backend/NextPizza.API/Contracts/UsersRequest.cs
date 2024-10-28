namespace NextPizza.API.Contracts
{
    public record UsersRequest(
        long Id,
        string FullName,
        string Email,
        string Password,
        DateTime createdAt,
        DateTime updatedAt);
}
