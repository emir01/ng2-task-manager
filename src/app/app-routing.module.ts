import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TaskListComponent} from "./tasks/task-list/task-list.component";

export const routes: Routes = [
    {
        path:"", 
        redirectTo:"/tasks", 
        pathMatch:"full",
        data:{
            title:"Home"
        }
    },
    {
        path:"tasks", 
        component: TaskListComponent,
        data:{
            title:"My Tasks"
        }
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{};
export const routedComponents = [TaskListComponent]