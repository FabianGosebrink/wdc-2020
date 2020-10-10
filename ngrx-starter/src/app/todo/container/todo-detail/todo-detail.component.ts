import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../models/todo'; 
import { ActivatedRoute } from '@angular/router'; 
import { TodoService } from '../../../core/services/todo.service'; 

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.todo$ = this.todoService.getItem(id);
  }
}