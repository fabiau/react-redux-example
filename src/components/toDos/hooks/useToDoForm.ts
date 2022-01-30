import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { todoAdded } from '../../../store/slices/todosSlice';

interface FormData {
  description: string;
}

export function useTodoForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const handleAddTodo = handleSubmit((data) => {
    dispatch(
      todoAdded({
        id: uniqid(),
        text: data.description,
      })
    );
    reset();
  });

  return { register, handleSubmit: handleAddTodo };
}
