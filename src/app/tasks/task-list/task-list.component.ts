import {Component, OnInit} from "@angular/core";

import Task from "../shared/task.model";

@Component({
    moduleId:module.id,
    selector:"task-list",
    templateUrl:"task-list.component.html"
})
export class TaskListComponent implements OnInit{
    tasks: Task[];

    ngOnInit():void{
        console.log("initialized");
    }
}