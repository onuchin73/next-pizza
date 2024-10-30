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

        /// <summary> Возвращает IP пользователя </summary>
        protected string ClientIP
        {
            get
            {
                var remoteIP = Request?.Headers["X-Real-IP"].ToString();
                remoteIP = string.IsNullOrEmpty(remoteIP) ? Request?.HttpContext?.Connection?.RemoteIpAddress?.ToString() : remoteIP;
                return remoteIP;
            }
        }

        protected OkObjectResult Success(string message) => Success(message, null);

        protected OkObjectResult Success(object data, string message = null) => Ok(new
        {
            success = true,
            message,
            data
        });

        protected ObjectResult Fail(string message, IEnumerable<string> errors = null) => Fail(message, null, errors);

        protected ObjectResult Fail(string message, object data, IEnumerable<string> errors = null)
        {
            return new ObjectResult(new
            {
                success = false,
                message,
                data,
                errors
            })
            {
                StatusCode = 422
            };
        }
    }
}
