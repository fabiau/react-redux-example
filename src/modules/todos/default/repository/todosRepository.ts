import Dexie, { Table } from 'dexie';
import { ITodo } from '../ITodo';

class TodosDb extends Dexie {
  public readonly todos!: Table<ITodo>;

  constructor() {
    super('todosDb');
    this.version(1).stores({
      todos: 'id, text, completed', // Primary key and indexed props
    });
  }
}

export class TodosRepository {
  private readonly db = new TodosDb();

  public add(item: ITodo) {
    return this.db.todos.add(item);
  }

  public delete(id: string) {
    return this.db.todos.delete(id);
  }

  public all() {
    return this.db.todos.toArray();
  }
}

export const todosRepository = new TodosRepository();
export default todosRepository;
