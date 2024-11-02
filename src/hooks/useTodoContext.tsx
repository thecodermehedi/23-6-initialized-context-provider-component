import { useContext } from "react";
import TodoContext, { ITodoContext } from "@/context/TodoContext";

const useTodoContext = (): ITodoContext => {
 const context = useContext(TodoContext);

 if (context === undefined) {
  throw new Error('useTodoContext must be used within a TodoProvider');
 }

 return context;
};

export default useTodoContext;
