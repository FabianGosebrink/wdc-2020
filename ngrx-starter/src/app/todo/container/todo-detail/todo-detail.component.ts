import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../../models/todo';
import * as todoActions from '../../store/todo.actions';
import * as fromSelectors from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.todo$ = this.store.pipe(select(fromSelectors.getSelectedItem));

    this.store.dispatch(todoActions.loadSingleTodo());
  }
}
