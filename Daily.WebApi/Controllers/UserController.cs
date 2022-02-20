using Daily.Models;
using Daily.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Daily.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IBaseRepository<UserModel> Users { get; set; }

        public UserController(IBaseRepository<UserModel> user)
        {
            Users = user;
        }

        [HttpGet("{id}")]
        public JsonResult Get(Guid id)
        {
            return new JsonResult(Users.Get(id));
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            return new JsonResult(Users.GetAll());
        }

        [HttpPost]
        public JsonResult Post(UserModel u)
        {
            bool success = true;

            try
            {
                Users.Create(u);
            }
            catch(Exception)
            {
                success = false;
            }

            return success ? new JsonResult("Create successfull") : new JsonResult("Create was not sucessful");
        }

        [HttpPut]
        public JsonResult Put(UserModel u)
        {
            bool success = true;
            var user = Users.Get(u.Id);

            try
            {
                if (user != null)
                    user = Users.Update(u);
                else
                    success = false;
            }
            catch(Exception)
            {
                success = false;
            }

            return success ? new JsonResult($"Update successfull {user.Id}") : new JsonResult("Update was not sucessful");
        }

        [HttpDelete]
        public JsonResult Delete(Guid id)
        {
            bool success = true;
            var user = Users.Get(id);

            try
            {
                if (user != null)
                    Users.Delete(user.Id);
                else
                    success = false;
            }
            catch(Exception)
            {
                success = false;
            }

            return success ? new JsonResult("Delete successful") : new JsonResult("Delete was not sucessful");
        }
    }
}
