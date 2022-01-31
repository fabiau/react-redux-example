import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getDefaultTodosModule } from '.';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './Todos.css';

export const Todos = () => {
  return (
    <DynamicModuleLoader modules={[getDefaultTodosModule()]} strictMode>
      <main className="todos">
        <h1>My To-do List</h1>
        <h2>Add a new To-do</h2>
        <TodoForm />
        <TodoList />
      </main>
    </DynamicModuleLoader>
  );
};

Todos.$ = Symbol('Todos');
