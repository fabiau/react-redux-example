import { ITodo } from '../ITodo';

export interface ITodosHydratedPayload {
  todos: ReadonlyArray<ITodo>;
}
