import { FormEvent, useState } from "react";
import useTodoContext from "@/hooks/useTodoContext";
import { toast } from "sonner";
import uuid from "@/lib/uuid";
import { TodoActionTypes } from "@/types/todo";

const TodoForm = () => {
 const { dispatch } = useTodoContext();
 const [task, setTask] = useState("");
 const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  if (!task) {
   return toast.error("Task is required")
  }
  const newTodo = { id: uuid(), name: task, isCompleted: false }
  dispatch({ type: TodoActionTypes.ADD_TASK, payload: newTodo })
  setTask("")
 }
 return (
  <div className="max-w-3xl text-black px-5 mt-10 bg-white rounded-2xl py-10 shadow-lg">
   <h1 className="font-bold text-xl text-center mb-5">Add Task</h1>
   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter Task Name" className="border rounded-2xl px-3 py-2 focus:outline-none" />
    <button type="submit" className="px-3 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200
     cursor-pointer ">Submit</button>
   </form>
  </div>
 );
};

export default TodoForm;
