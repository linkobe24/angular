import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent], // solo TasksComponent es utilizado en el app.module por UserComponent
  imports: [CommonModule, FormsModule,SharedModule] // CommonModule tiene los pipes, BrowserModule es solo para el root module.
})
export class TasksModule {}
