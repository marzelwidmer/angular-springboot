import {Todo} from './todo-app.component';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});

it('should accept values in the constructor', () => {
  let todo = new Todo({
    title: 'hello',
    complete: true
  });
  expect(todo.title).toEqual('hello');
  expect(todo.complete).toEqual(true);
})
