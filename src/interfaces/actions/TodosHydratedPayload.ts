import { Todo } from '../models/Todo';

export interface TodosHydratedPayload {
  todos: ReadonlyArray<Todo>;
}
