import { useDispatch } from 'react-redux';
import { ToDo } from '../../interfaces/models/ToDo';
import { toggleTodo } from '../../store/slices/toDosSlice';

export interface TodoListItemProps {
  todo: ToDo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

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
