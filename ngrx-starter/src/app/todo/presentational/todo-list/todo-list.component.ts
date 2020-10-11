import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() items: Todo[] = [];
  @Input() doneItems: Todo[] = [];
  @Output() markAsDone = new EventEmitter();
  showList = true;

  constructor() {}

  ngOnInit() {}

  moveToDone(item: Todo) {
    const clone = { ...item };
    clone.done = true;
    this.markAsDone.emit(clone);
  }

  toggleDoneList() {
    this.showList = !this.showList;
  }
}
