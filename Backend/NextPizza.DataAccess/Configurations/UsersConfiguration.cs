using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NextPizza.Core.Models;
using NextPizza.DataAccess.Entites;

namespace NextPizza.DataAccess.Configurations
{
    public class UsersConfiguration : IEntityTypeConfiguration<UsersEntity>
    {
        public void Configure(EntityTypeBuilder<UsersEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(b => b.FullName)
                .HasMaxLength(Users.MAX_NAME_LENGTH)
                .IsRequired();

            builder.Property(b => b.Email)
                .IsRequired();

            builder.Property(b => b.Password)
                .IsRequired();

            builder.Property(b => b.CreatedAt)
                .IsRequired();

            builder.Property(b => b.UpdatedAt)
                .IsRequired();
        }
    }
}
