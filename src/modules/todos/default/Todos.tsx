import { useTranslation } from 'react-i18next';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './Todos.css';

export const Todos = () => {
  const { t } = useTranslation('todos');

  return (
    <main className="todos">
      <h1>{t('title')}</h1>
      <h2>{t('form.title')}</h2>
      <TodoForm />
      <TodoList />
    </main>
  );
};
