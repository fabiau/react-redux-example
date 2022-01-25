import { useDispatch } from 'react-redux';
import { toggleToDo } from '../../../store/slices/toDosSlice';

export function useToDoToggle(todoId: string) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleToDo({ id: todoId }));
  };
  return handleToggleClick;
}
