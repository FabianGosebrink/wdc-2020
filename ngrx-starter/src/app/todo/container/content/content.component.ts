import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service'; 

import { Todo } from '../../../models/todo'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getData();
  }

  addTodo(item: string) {
    this.todoService.addItem(item).subscribe(() => this.getData());
  }

   markAsDone(item: Todo) {
    this.todoService.updateItem(item).subscribe(() => this.getData());
  }

  getData() {
    this.todoService.getItems().subscribe(result => (this.items = result));
  }
}