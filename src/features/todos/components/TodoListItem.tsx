import { useDispatch } from "react-redux";
import { Todo } from "../Todo";
import { toggleTodo } from "../todosSlice";

export interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  return (
    <li>
      {todo.description}
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleToggleClick}
      />
    </li>
  );
};
