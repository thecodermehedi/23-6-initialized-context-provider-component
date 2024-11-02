import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
 return (
  <main className="min-h-screen flex justify-center items-center gap-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white selection:bg-black selection:text-white">
   <TodoForm />
   <TodoList />
  </main>
 );
};

export default Todo;
