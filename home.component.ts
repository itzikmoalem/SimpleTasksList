import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public fg: FormGroup;
    public newtask: string;

    constructor(public api: ApiService, private fb: FormBuilder) {
        this.fg = fb.group({
            newtask: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    public tasks: Task[] = [];

    ngOnInit() { }

    public ShowTasks()
    {
        console.log("ShowTask() Function");

        this.api.getAllTasks().subscribe(res => {
            if (res !== undefined)
            {
                this.tasks = [];
                for (let i = 0; i < res.length; i++) {
                    var task: Task = new Task();

                    task.id = res[i].id;
                    task.task = res[i].task;

                    this.tasks.push(task);
                }
            }
        });
    }

    public AddTask()
    {
        console.log("AddTask() Function");

        if (this.fg != null)
        {
            let t: Task = { id: 0, task: ''};

            t.id = this.tasks.length;
            t.task = this.fg.value.newtask;

            if (t.task != null && t.task != "") {
                console.log("Task Sending");

                this.api.setTask(t).subscribe(res => {

                if (res !== undefined) {
                    // succsfull post 
                    this.tasks.push(t);
                    console.log("Task Added");
                }
            });
            }
        }
    }

    public deleteTask(t: Task) {
        console.log("deleteTask("+t.id+") Function");

        this.api.deleteTask(t.id).subscribe(res => {
            if (res !== undefined) {
                console.log("Task " + t.id + " Deleted");
            }
        });
    }

    get g() {
        return this.fg.controls;
    }
}
