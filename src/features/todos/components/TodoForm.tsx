import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { addTodo } from "../todosSlice";

interface FormData {
  description: string;
}

export const TodoForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    dispatch(
      addTodo({
        id: uniqid(),
        description: data.description,
      })
    );
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <input type="text" {...register("description")} />
      <button type="submit">Add</button>
    </form>
  );
};
