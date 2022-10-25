using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class HomeController : Controller
    {
        private Modules module = Singleton.GetInstance;

        [HttpGet]
        public string GetAllTasks()
        {
            var json = JsonSerializer.Serialize(this.module.getTasks());
            return json;
        }

        [HttpPost]
        public string Post([FromBody] Task t)
        {
            this.module.setTask(t);
            return "true";
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            this.module.deleteTask(id);
            return "true";
        }
    }
}
