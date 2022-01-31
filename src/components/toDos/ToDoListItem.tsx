import { Todo } from '../../interfaces/models/Todo';
import { useTodoToggle } from './hooks/useTodoToggle';

import './TodoListItem.css';

export interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const handleToggleClick = useTodoToggle(todo.id);

  return (
    <li className="todo-list-item" onClick={handleToggleClick}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleClick}
      />
      {todo.text}
    </li>
  );
};
