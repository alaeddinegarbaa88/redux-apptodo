import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { title: "t1", id: 1, isDone: true },
    { title: "t2", id: 2, isDone: false },
    { title: "t3", id: 3, isDone: false },
  ],
  reducers: {
    addTodo: (state, actions) => {
      //create object todo
      const newTodo = {
        //get the value from the function params with action.payload
        title: actions.payload,
        id: uuid(),
        isDone: false,
      };
      //add object to the list of objects in the state
      state.push(newTodo)
    },
    deleteTodo:(state,actions)=>{
      const sts = state.filter((t)=>t.id !== actions.payload)
      return sts
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
