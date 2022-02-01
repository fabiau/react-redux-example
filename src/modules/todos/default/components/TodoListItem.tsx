import { useTranslation } from 'react-i18next';
import { ITodo } from '../ITodo';
import { useTodoRemove } from './hooks/useTodoRemove';
import { useTodoToggle } from './hooks/useTodoToggle';

import './TodoListItem.css';

export interface TodoListItemProps {
  todo: ITodo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const { t } = useTranslation('todos');
  const handleToggleClick = useTodoToggle(todo.id);
  const handleRemoveClick = useTodoRemove(todo.id);

  return (
    <li className="todo-list-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleClick}
      />
      {todo.text}
      <button
        type="button"
        className="todo-list-item__remove"
        onClick={handleRemoveClick}
      >
        {t('list.remove')}
      </button>
    </li>
  );
};
