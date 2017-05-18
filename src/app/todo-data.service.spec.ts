import { Todo } from './todo';
import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => { //前面加上 f 代表 only只測試這個, 加上 x 代表 skip 此測試
  beforeEach(() => {
    TestBed.configureTestingModule({ //configure and create an Angular testing module
      providers: [TodoDataService]
    });
  });
                    //inject: dependency injection, test function
  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodo()', () => {
    it('should return an empty arrary by default',
      inject([TodoDataService], (service: TodoDataService) => {
        expect(service.getAllTodos()).toEqual([]);  //expect預期會發生的事情
      }
    ));

    it('should return all todos',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false}); //可以舉例來說
        let todo2 = new Todo({title: 'B', complete: true});
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1,todo2]);
      }
    ));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false}); //可以舉例來說
        let todo2 = new Todo({title: 'B', complete: true});
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getTodoById(1)).toEqual(todo1);
        expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should remove a todo with corresponding id',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false}); //可以舉例來說
        let todo2 = new Todo({title: 'B', complete: true});
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1,todo2]);
        service.deleteTodo(1);
        expect(service.getAllTodos()).toEqual([todo2]);
        service.deleteTodo(3);
        expect(service.getAllTodos()).toEqual([todo2]);
        service.deleteTodo(2);
        expect(service.getAllTodos()).toEqual([]);
    }));
  });

  describe('#updateTodo(id, value)', () => {
    it('should return todo with corresponging id and date',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false});
        service.addTodo(todo1);
        let updateTodo = service.updateTodoById(1,
          {title: 'change A to B!'}
        );
        expect(updateTodo.title).toEqual('change A to B!');
    }));

    it('should return null if todo is not found',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false});
        service.addTodo(todo1);
        let updateTodo = service.updateTodoById(2,
          {title: 'change A to B!'}
        );
        expect(updateTodo).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return the updated todo with inverse complete status',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'A', complete: false});
        service.addTodo(todo1);
        let updateTodo = service.toggleTodoComplete(todo1);
        expect(updateTodo.complete).toEqual(true);
        updateTodo = service.toggleTodoComplete(todo1);
        expect(updateTodo.complete).toEqual(false);
    }));
  });

});
