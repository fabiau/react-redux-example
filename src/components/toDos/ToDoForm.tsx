import { useTodoForm } from './hooks/useTodoForm';

import './TodoForm.css';

export const TodoForm = () => {
  const { register, handleSubmit } = useTodoForm();

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input autoFocus type="text" {...register('description')} />
      <button type="submit">Add</button>
    </form>
  );
};
