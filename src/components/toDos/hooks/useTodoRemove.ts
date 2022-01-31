import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../store/sagas/todos/removeTodoSaga';

export function useTodoRemove(todoId: string) {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeTodo({ id: todoId }));
  };
  return handleRemoveClick;
}
