import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {sno: 1,
    title : this.title,
    desc : this.desc,
    active : true
    }
    this.todoAdd.emit(todo);
  }
}
