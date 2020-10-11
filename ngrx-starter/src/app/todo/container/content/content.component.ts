import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../../models/todo';
import * as todoActions from '../../store/todo.actions';
import * as fromSelectors from '../../store/todo.selectors';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;
  doneItems$: Observable<Todo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(fromSelectors.getAllUndoneItems));
    this.doneItems$ = this.store.pipe(select(fromSelectors.getAllDoneItems));

    this.store.dispatch(todoActions.loadAllTodos());
  }

  addTodo(item: string) {
    this.store.dispatch(todoActions.addTodo({ payload: item }));
  }

  markAsDone(item: Todo) {
    this.store.dispatch(todoActions.setAsDone({ payload: item }));
  }

  getData() {
    //this.todoService.getItems().subscribe(result => (this.items = result));
  }
}
