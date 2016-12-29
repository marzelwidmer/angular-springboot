import {Component} from '@angular/core';
import {TodoDataService} from "./components/todo/todo-data.service";
import {Todo} from "./components/todo/todo-app.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  // We first define a newTodo property and assign a
  // new Todo() when the component class is instantiated.
  // This is the same Todo instance specified in the two-way binding expression
  // of [(ngModel)] in our view:
  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  // Service is now available as this.todoDataService
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // addTodo(todo) {
  //   this.todoDataService.addTodo(todo);
  //   this.newTodo = new Todo();
  // }
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
