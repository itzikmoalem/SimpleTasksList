
using System.Collections.Generic;
using System.Linq;

namespace WebApplication1
{
    public class Modules
    {
        public List<Task> tasks;

        public Modules()
        {
            this.tasks = new List<Task>();
        }

        public void setTask(Task t)
        {
            this.tasks.Add(t);
        }

        public List<Task> getTasks()
        {
            return this.tasks;
        }

        public void deleteTask(int id)
        {
            this.tasks.Remove(this.tasks.Where(t => t.id == id).First());
        }
    }
}
