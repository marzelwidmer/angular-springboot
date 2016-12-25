/**
 * In this Todo class definition, we specify that each Todo instance will have three properties:
 *
 * <ul>
 *     <li>id: number, unique ID of the todo item</li>
 *     <li>title: string, title of the todo item</li>
 *     <li>complete: boolean, whether or not the todo item is complete</li>
 * </ul>
 */
export class Todo {

  id: number;
  title: string;
  complete: boolean;

  /**
   *
   * @param values
   */
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
