import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  newTodo : Todo = new Todo();
  //private todoDataService: TodoDataService;

  constructor(private todoDataService: TodoDataService) { //因為寫在寫在建構子裡，可省略上下兩句
    this.title = 'app works!';
    //this.todoDataService = todoDataService;
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo); //把newTodo喂給他
    this.newTodo = new Todo();
  }

   removeTodo(todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
