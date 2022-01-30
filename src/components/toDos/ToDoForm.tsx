import { useTodoForm } from './hooks/useTodoForm';

export const TodoForm = () => {
  const { register, handleSubmit } = useTodoForm();

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...register('description')} />
      <button type="submit">Add</button>
    </form>
  );
};
