import { useReducer } from 'react';
import TodoContext from '@/context/TodoContext';
import { TTodoAction, TTodoChildren, TTodoState, TodoActionTypes } from '@/types/todo';

const initialState: TTodoState = [];


const todoReducer = (currentState: TTodoState, action: TTodoAction) => {
 switch (action.type) {
  case TodoActionTypes.ADD_TASK:
   return [...currentState, action.payload];
  case TodoActionTypes.DELETE_TASK:
   return currentState.filter((task) => task.id !== action.payload.id);
  case TodoActionTypes.TOGGLE_TASK:
   return currentState.map((task) =>
    task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task);
  default:
   return currentState
 }
};

const TodoProvider = ({ children }: TTodoChildren) => {
 const [state, dispatch] = useReducer(todoReducer, initialState);

 const values = { state, dispatch };

 return (
  <TodoContext.Provider value={values}>
   {children}
  </TodoContext.Provider>
 );
};

export default TodoProvider;
