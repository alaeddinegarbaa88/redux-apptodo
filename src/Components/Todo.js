import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoSlice";
const Todo = ({job}) => {
    console.log("this is the title",job.title)
    const dispatch = useDispatch()
  return (
    <>
      <h1>title: {job.title}</h1>
      <p>status: {job.isDone?"Done":"waiting"}</p>
      <button onClick={()=>dispatch(deleteTodo(job.id))}>Delete</button>
    </>
  );
};

export default Todo;
