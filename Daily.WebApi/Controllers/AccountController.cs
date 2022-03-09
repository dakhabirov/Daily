using Daily.Services.Implementations;
using Daily.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Daily.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly ITokenService tokenService;

        public AccountController (ITokenService tokenService)
        {
            this.tokenService = tokenService;
        }

        [HttpPost]
        [Route("buildtoken")]
        public JsonResult BuildToken([FromForm]string username, [FromForm]string password)
        {
            var tokenKey = tokenService.BuildToken(username, password);

            return Json(tokenKey);
        }
    }
}
