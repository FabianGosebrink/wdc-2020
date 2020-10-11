import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContentComponent } from './container/content/content.component';
import { TodoDetailComponent } from './container/todo-detail/todo-detail.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';
import { TodoEffects } from './store/todo.effects';
import { featureName, todoReducer } from './store/todo.reducer';

const routes: Routes = [
  { path: '', component: ContentComponent },
  {
    path: ':id',
    component: TodoDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  declarations: [
    ContentComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent,
  ],
})
export class TodoModule {}
