import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../../models/todo'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() items: Todo[] = [];
  @Output() markAsDone = new EventEmitter();
  doneItems = [];

  showList = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.items.currentValue) {
      this.doneItems = changes.items.currentValue.filter(x => x.done);
      this.items = changes.items.currentValue.filter(x => !x.done);
    }
  }

  moveToDone(item: Todo) {
    item.done = true;
    this.markAsDone.emit(item);
  }

  toggleDoneList() {
    this.showList = !this.showList;
  }
}