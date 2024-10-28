namespace NextPizza.API.Contracts
{
    public record UsersResponse(
        long Id,
        string FullName,
        string Email,
        string Password,
        DateTime createdAt,
        DateTime updatedAt);
}
