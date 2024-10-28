namespace NextPizza.API.Contracts
{
    public record ProductsRequest(
        long Id,
        string Name,
        string ImageUrl,
        DateTime createdAt,
        DateTime updatedAt);
}
