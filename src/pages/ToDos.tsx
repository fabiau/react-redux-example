import { TodoForm } from '../components/toDos/TodoForm';
import { TodoList } from '../components/toDos/TodoList';

import './Todos.css';

export const Todos = () => {
  return (
    <main className="todos">
      <h1>My To-do List</h1>
      <h2>Add a new To-do</h2>
      <TodoForm />
      <TodoList />
    </main>
  );
};
