import { useForm } from 'react-hook-form';

interface FormData {
  description: string;
}

export function useTodoForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const handleAddToDo = handleSubmit((data) => {
    reset();
  });

  return { register, handleSubmit: handleAddToDo };
}
