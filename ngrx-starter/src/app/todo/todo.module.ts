import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ContentComponent } from './container/content/content.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { TodoDetailComponent } from './container/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  {
    path: ':id',
    component: TodoDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    ContentComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent]
})
export class TodoModule { }