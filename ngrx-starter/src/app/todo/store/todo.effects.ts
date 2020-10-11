import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { TodoService } from './../../core/services/todo.service';
import { selectRouteParam } from './router.reducer';
import * as todoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadAllTodos),
      switchMap(() =>
        this.todoService
          .getItems()
          .pipe(
            map((todos) => todoActions.loadAllTodosFinished({ payload: todos }))
          )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.addTodo),
      map((action) => action.payload),
      switchMap((payload) =>
        this.todoService
          .addItem(payload)
          .pipe(map((todo) => todoActions.addTodoFinished({ payload: todo })))
      )
    )
  );

  markAsDone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.setAsDone),
      map((action) => action.payload),
      switchMap((payload) =>
        this.todoService
          .updateItem(payload)
          .pipe(map((todo) => todoActions.setAsDoneFinished({ payload: todo })))
      )
    )
  );

  loadSingleTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadSingleTodo),
      withLatestFrom(this.store.pipe(select(selectRouteParam('id')))),
      switchMap(([action, id]) =>
        this.todoService
          .getItem(id)
          .pipe(
            map((todo) => todoActions.loadSingleTodoFinished({ payload: todo }))
          )
      )
    )
  );
}
