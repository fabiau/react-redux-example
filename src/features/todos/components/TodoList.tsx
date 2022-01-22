import { useSelector } from "react-redux";
import { selectTodosItems } from "../selectors/selectTodos";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const todos = useSelector(selectTodosItems);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
