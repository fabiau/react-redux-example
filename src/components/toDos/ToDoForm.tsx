import { useToDoForm } from './hooks/useToDoForm';

export const ToDoForm = () => {
  const { register, handleSubmit } = useToDoForm();

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...register('description')} />
      <button type="submit">Add</button>
    </form>
  );
};
