import { Todo } from '../../interfaces/models/Todo';
import { useTodoRemove } from './hooks/useTodoRemove';
import { useTodoToggle } from './hooks/useTodoToggle';

import './TodoListItem.css';

export interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const handleToggleClick = useTodoToggle(todo.id);
  const handleRemoveClick = useTodoRemove(todo.id);

  return (
    <li className="todo-list-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleClick}
      />
      {todo.text}
      <button
        type="button"
        className="todo-list-item__remove"
        onClick={handleRemoveClick}
      >
        Remove
      </button>
    </li>
  );
};
