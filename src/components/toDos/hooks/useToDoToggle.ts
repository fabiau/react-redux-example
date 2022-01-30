import { useDispatch } from 'react-redux';
import { todoToggled } from '../../../store/slices/todosSlice';

export function useTodoToggle(todoId: string) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(todoToggled({ id: todoId }));
  };
  return handleToggleClick;
}
