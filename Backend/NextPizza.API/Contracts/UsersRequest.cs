namespace NextPizza.API.Contracts
{
    public record UsersRequest(
        string FullName,
        string Email,
        string Password
    );
}
