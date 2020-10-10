import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

@Output() todoAdded = new EventEmitter();

    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            todoValue: new FormControl('', Validators.required),
        });

        // return formBuilder.group({
        //     personalData: formBuilder.group({
        //         email: 'defaul@email.com',
        //         mobile: '',
        //         country: ''
        //     }),
        //     todoValue: '',
        //     text: ''
        // });
    }

    addTodo() {
        this.todoAdded.emit(this.form.value.todoValue);
        this.form.reset();
    }

}