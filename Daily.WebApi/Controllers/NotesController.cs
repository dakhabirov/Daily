using Daily.Models;
using Daily.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Daily.WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private IBaseRepository<UserModel> Users { get; set; }

        private IBaseRepository<NoteModel> Notes { get; set; }

        public NotesController(IBaseRepository<NoteModel> note, IBaseRepository<UserModel> user)
        {
            Users = user;
            Notes = note;
        }

        [HttpGet("{id}")]
        public JsonResult Get(Guid id)
        {
            return new JsonResult(Notes.Get(id));
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var currentUser = Users.GetAll().FirstOrDefault(u => u.Username == HttpContext.User.Identity.Name);
            
            var notesContent = new List<string>();
            foreach(var note in currentUser.Notes)
            {
                notesContent.Add(note.Content);
            }

            return new JsonResult(notesContent);
        }

        [HttpPost]
        public JsonResult Post(NoteModel note)
        {
            bool success = true;

            try
            {
                Notes.Create(note);
            }
            catch (Exception)
            {
                success = false;
            }

            return success ? new JsonResult("Create successfull") : new JsonResult("Create was not sucessful");
        }

        [HttpPut]
        public JsonResult Put(NoteModel note)
        {
            bool success = true;
            var Note = Notes.Get(note.Id);

            try
            {
                if (Note != null)
                    Note = Notes.Update(note);
                else
                    success = false;
            }
            catch (Exception)
            {
                success = false;
            }

            return success ? new JsonResult($"Update successfull {Note.Id}") : new JsonResult("Update was not sucessful");
        }

        [HttpDelete]
        public JsonResult Delete(Guid id)
        {
            bool success = true;
            var Note = Notes.Get(id);

            try
            {
                if (Note != null)
                    Notes.Delete(Note.Id);
                else
                    success = false;
            }
            catch (Exception)
            {
                success = false;
            }

            return success ? new JsonResult("Delete successful") : new JsonResult("Delete was not sucessful");
        }
    }
}
