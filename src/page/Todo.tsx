import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTodos } from "../redux/todo/todoSlice";

const Todo = () => {
  const data = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  console.log("data", data);

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
    </div>
  );
};

export default Todo;
