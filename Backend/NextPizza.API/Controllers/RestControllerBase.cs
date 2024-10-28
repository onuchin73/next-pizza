using Microsoft.AspNetCore.Mvc;

namespace NextPizza.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class RestControllerBase : ControllerBase
    {
        protected RestControllerBase()
        {
        }
    }
}
