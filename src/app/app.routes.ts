import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: TaskListComponent,
        title: 'Tasks'
    },
    {
        path: 'add-task',
        component: AddTaskComponent,
    },
    {
        path: 'edit-task/:id',
        component: EditTaskComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
