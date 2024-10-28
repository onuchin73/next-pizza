using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NextPizza.Core.Models;
using NextPizza.DataAccess.Entites;

namespace NextPizza.DataAccess.Configurations
{
    public class ProductsConfiguration : IEntityTypeConfiguration<ProductsEntity>
    {
        public void Configure(EntityTypeBuilder<ProductsEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(b => b.Name)
                .HasMaxLength(Products.MAX_NAME_LENGTH)
                .IsRequired();

            builder.Property(b => b.ImageUrl)
                .IsRequired();

            builder.Property(b => b.CreatedAt)
                .IsRequired();

            builder.Property(b => b.UpdatedAt)
                .IsRequired();
        }
    }
}