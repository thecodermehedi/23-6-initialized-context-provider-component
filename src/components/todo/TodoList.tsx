import useTodoContext from "@/hooks/useTodoContext";
import cn from "@/lib/cn";
import { TTodo, TodoActionTypes } from "@/types/todo";
import { toast } from "sonner";

const TodoList = () => {
 const { state, dispatch } = useTodoContext();
 const handleDelete = (todo: TTodo) => {
  dispatch({ type: TodoActionTypes.DELETE_TASK, payload: todo });
  toast.success("Task deleted successfully");
 };
 return (
  <div className="min-w-96 min-h-96 bg-white rounded-lg text-black p-5">
   <h1 className="font-bold text-xl text-center mb-5">Tasks</h1>
   <div className="space-y-4">
    {state?.map((todo: TTodo) => {
     return (
      <div key={todo.id} className="flex justify-between items-center border rounded-2xl py-2 px-3 cursor-text">
       <input
        type="checkbox"
        className="peer relative appearance-none size-5 border rounded-full border-gray-300 checked:bg-gray-600 cursor-pointer checked:border-gray-600"
        checked={todo.isCompleted}
        onChange={() => dispatch({ type: TodoActionTypes.TOGGLE_TASK, payload: todo })}
       />
       <p className={cn(todo.isCompleted && "line-through")}>{todo.name}</p>
       <svg onClick={() => handleDelete(todo)} className="size-6 text-gray-500 hover:text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 6a1 1 0 0 1-.883.993L20.5 7h-.845l-1.231 12.52A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h5a3.5 3.5 0 1 1 7 0h5a1 1 0 0 1 1 1Zm-7.25 3.25a.75.75 0 0 0-.743.648L13.5 10v7l.007.102a.75.75 0 0 0 1.486 0L15 17v-7l-.007-.102a.75.75 0 0 0-.743-.648Zm-4.5 0a.75.75 0 0 0-.743.648L9 10v7l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-7l-.007-.102a.75.75 0 0 0-.743-.648ZM12 3.5A1.5 1.5 0 0 0 10.5 5h3A1.5 1.5 0 0 0 12 3.5Z" fill="currentColor" /></svg>
      </div>
     )
    })}
   </div>
  </div>
 );
};

export default TodoList;
