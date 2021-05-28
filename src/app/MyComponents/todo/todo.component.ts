import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : Todo[];
  localItem: string;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null)
      this.todos = [];
      else{
        this.todos = JSON.parse(this.localItem);
      }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }

}
