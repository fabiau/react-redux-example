import { useSelector } from 'react-redux';
import { selectToDosItems } from '../../store/selectors/selectToDos';
import { TodoListItem } from './ToDoListItem';

export const ToDoList = () => {
  const toDos = useSelector(selectToDosItems);

  return (
    <ul>
      {toDos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
