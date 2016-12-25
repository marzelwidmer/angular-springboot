import {Injectable} from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoDataService {

  // Placeholder for last id
  // so we can simulate automatic incrementing od id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
  }

  // Simulate  POST /todos
  public addTodo(todo: Todo): TodoDataService {
    if (!todo.id) { // null check
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  public deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  public updateTodoById(id: number, values: Object = {}) : Todo {
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;

  }

  // Simulate GET /todos
  public getAllTodos(): Todo[]{
    return this.todos;
  }

  // Simulate GET /todo/:id
  public getTodoById(id: number) {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  public toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: ! todo.complete
    });
    return updatedTodo;
  }
}
