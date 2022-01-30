import { Todo } from '../../interfaces/models/Todo';
import { useTodoToggle } from './hooks/useTodoToggle';

export interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const handleToggleClick = useTodoToggle(todo.id);

  return (
    <li>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleClick}
      />
    </li>
  );
};
