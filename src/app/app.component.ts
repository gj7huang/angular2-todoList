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
  //private todoDataService: TodoDataService;

  constructor(private todoDataService: TodoDataService) { //因為寫在寫在建構子裡，可省略上下兩句
    this.title = 'app works!';
    //this.todoDataService = todoDataService;
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
