import Dexie, { Table } from 'dexie';
import { Todo } from '../interfaces/models/Todo';

class TodosDb extends Dexie {
  public readonly todos!: Table<Todo>;

  constructor() {
    super('todosDb');
    this.version(1).stores({
      todos: 'id, text, completed', // Primary key and indexed props
    });
  }
}

export class TodosRepository {
  private readonly db = new TodosDb();

  public readonly add = (item: Todo) => {
    this.db.todos.add(item);
  };

  public readonly delete = (id: string) => {
    this.db.todos.delete(id);
  };
}

export const todosRepository = new TodosRepository();
export default todosRepository;
