namespace NextPizza.API.Contracts
{
    public record ProductsResponse(
        long Id,
        string Name,
        string ImageUrl,
        DateTime createdAt,
        DateTime updatedAt);
}
