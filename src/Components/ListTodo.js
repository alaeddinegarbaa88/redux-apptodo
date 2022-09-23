import Todo from "./Todo";
import { useSelector } from 'react-redux'
const ListTodo = () => {
  const todos = useSelector((state) => state.todo)
  return (
    <>
      {todos.map((job) => <Todo job={job} />)}
    </>
  );
};

export default ListTodo;
