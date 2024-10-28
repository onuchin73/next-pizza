﻿using System.ComponentModel.DataAnnotations;

namespace NextPizza.Core.Ddd
{
    public abstract class HasIdBase<TKey> : IHasId<TKey>
    where TKey : IEquatable<TKey>
    {
        [Key, Required]
        public virtual TKey Id { get; set; }

        object IHasId.Id => Id;
    }
}
