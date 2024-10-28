using NextPizza.Core.Ddd;

namespace NextPizza.Core.Abstractions
{
    /// <summary> Базовый класс с Id типа long </summary>
    public abstract class LongBaseId : HasIdBase<long>
    {
    }
}
