import { ToDo } from '../../interfaces/models/ToDo';
import { useToDoToggle } from './hooks/useToDoToggle';

export interface TodoListItemProps {
  todo: ToDo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const handleToggleClick = useToDoToggle(todo.id);

  return (
    <li>
      {todo.description}
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleToggleClick}
      />
    </li>
  );
};
