import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../modules/todos/default/sagas/addTodoSaga';

interface FormData {
  description: string;
}

export function useTodoForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const handleAddTodo = handleSubmit((data) => {
    dispatch(
      addTodo({
        text: data.description,
      })
    );
    reset();
  });

  return { register, handleSubmit: handleAddTodo };
}
