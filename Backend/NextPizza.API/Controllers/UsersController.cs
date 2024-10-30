using Microsoft.AspNetCore.Mvc;
using NextPizza.API.Contracts;
using NextPizza.Application.Services;
using NextPizza.Core.Models;

namespace NextPizza.API.Controllers
{
    public class UsersController : RestControllerBase
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsersResponse>>> GetUsers()
        {
            var users = await _usersService.GetAllUsers();

            var response = users.Select(b => new UsersResponse(b.Id, b.FullName, b.Email, b.Password, b.CreatedAt, b.UpdatedAt));

            return Success(response);
        }

        [HttpPost]
        public async Task<ActionResult<long>> CreateUser([FromBody] UsersRequest request)
        {
            if (string.IsNullOrEmpty(request.FullName))
                return Fail($"Наименование не должно быть пустым.");

            if (request.FullName.Length > Users.MAX_NAME_LENGTH)
                return Fail($"Наименование должно быть не более {Users.MAX_NAME_LENGTH} символов.");

            var user = new Users()
            {
                FullName = request.FullName,
                Email = request.Email,
                Password = request.Password,
                CreatedAt = DateTime.UtcNow
            };

            user.Id = await _usersService.CreateUser(user);

            return Success(user);
        }

        [HttpPut("{id:long}")]
        public async Task<ActionResult<long>> UpdateUser(long id, [FromBody] UsersRequest request)
        {
            if (string.IsNullOrEmpty(request.FullName))
                return Fail($"Наименование не должно быть пустым.");

            if (request.FullName.Length > Users.MAX_NAME_LENGTH)
                return Fail($"Наименование должно быть не более {Users.MAX_NAME_LENGTH} символов.");

            var user = new Users()
            {
                Id = id,
                FullName = request.FullName,
                Email = request.Email,
                Password = request.Password,
                UpdatedAt = DateTime.UtcNow
            };

            await _usersService.UpdateUser(user.Id, user.FullName, user.Email, user.Password, user.UpdatedAt);

            return Success(user);
        }

        [HttpDelete("{id:long}")]
        public async Task<ActionResult<long>> DeleteUser(long id)
        {
            return Success(await _usersService.DeleteUser(id));
        }
    }
}
