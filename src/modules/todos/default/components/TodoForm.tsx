import { useTranslation } from 'react-i18next';
import { useTodoForm } from './hooks/useTodoForm';

import './TodoForm.css';

export const TodoForm = () => {
  const { register, handleSubmit } = useTodoForm();
  const { t } = useTranslation('todos');

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input autoFocus type="text" {...register('description')} />
      <button type="submit">{t('form.add')}</button>
    </form>
  );
};
