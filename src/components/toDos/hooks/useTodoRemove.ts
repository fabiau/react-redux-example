import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../modules/todos/default/sagas/removeTodoSaga';

export function useTodoRemove(todoId: string) {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeTodo({ id: todoId }));
  };
  return handleRemoveClick;
}
