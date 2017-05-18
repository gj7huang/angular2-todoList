import { updateNotifierCheck } from 'tslint/lib/updateNotifier';
import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  todos: Todo[] = [];
  lastId: number = 0;
  constructor() {}

  //post
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this; //return 這個服務回去 TodoDataService
  }

  //delete
  deleteTodo(id: number): TodoDataService{
    this.todos = this.todos.filter(todo => todo.id !== id); //arrow function 飾選出達成條件的，則選出不為此id的
    return this;
  }

  //put
  updateTodoById(id: number, values: Object = {}): Todo{
    let todo = this.getTodoById(id);
    if(!todo) { return null; }
    Object.assign(todo, values); //在原本物件中的元素被指定改變了
    return todo;
  }

  //get 從todos 抓出id相符的
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // get all
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //改變布林值狀態
  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(
      todo.id,
      {
        complete: !todo.complete}
    );
    return updateTodo;
  }


}
