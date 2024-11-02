import { ITodoContext } from "@/types/todo";
import { createContext } from "react";

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export default TodoContext;
