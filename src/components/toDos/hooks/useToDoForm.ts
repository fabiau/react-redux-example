import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addToDo } from '../../../store/slices/toDosSlice';

interface FormData {
  description: string;
}

export function useToDoForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const handleAddToDo = handleSubmit((data) => {
    dispatch(
      addToDo({
        id: uniqid(),
        description: data.description,
      })
    );
    reset();
  });

  return { register, handleSubmit: handleAddToDo };
}
