import { useSelector } from 'react-redux';
import { selectTodosItems } from '../../store/selectors/todos';
import { TodoListItem } from './TodoListItem';

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
