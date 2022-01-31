import { useSelector } from 'react-redux';
import { TodoListItem } from './TodoListItem';

import { selectTodosItems } from '../../modules/todos/default/selectors';
import './TodoList.css';

export const TodoList = () => {
  const todos = useSelector(selectTodosItems);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
