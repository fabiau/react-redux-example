import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getCrazyTodosModule } from '.';
import { TodoForm } from '../../../modules/todos/default/components/TodoForm';
import { TodoList } from '../../../modules/todos/default/components/TodoList';

import '../../../modules/todos/default/Todos.css';

export const CrazyTodos = () => {
  return (
    <DynamicModuleLoader modules={[getCrazyTodosModule()]} strictMode>
      <main className="todos">
        <h1>My CRAZY To-do List</h1>
        <h2>Add a new To-do</h2>
        <TodoForm />
        <TodoList />
      </main>
    </DynamicModuleLoader>
  );
};
