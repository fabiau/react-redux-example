import { useDispatch } from 'react-redux';
import { removeTodo } from '../../sagas/removeTodoSaga';

export function useTodoRemove(todoId: string) {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeTodo({ id: todoId }));
  };
  return handleRemoveClick;
}
