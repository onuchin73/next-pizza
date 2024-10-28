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

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<long>> CreateUser([FromBody] UsersRequest request)
        {
            var (user, error) = Users.Create(
                request.Id,
                request.FullName,
                request.Email,
                request.Password,
                request.createdAt,
                request.updatedAt);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userId = await _usersService.CreateUser(user);

            return Ok(userId);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<long>> UpdateUser(long id, [FromBody] UsersRequest request)
        {
            var userId = await _usersService.UpdateUser(id, request.FullName, request.Email, request.Password, request.createdAt, request.updatedAt);

            return Ok(userId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<long>> DeleteUser(long id)
        {
            return Ok(await _usersService.DeleteUser(id));
        }
    }
}
