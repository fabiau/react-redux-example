import { useDispatch } from 'react-redux';
import { todoToggled } from '../../../modules/todos/default/defaultTodosSlice';

export function useTodoToggle(todoId: string) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(todoToggled({ id: todoId }));
  };
  return handleToggleClick;
}
