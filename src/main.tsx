import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import TodoProvider from '@/provider/TodoProvider';
import Todo from '@/components/todo/Todo';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <TodoProvider>
   <Toaster richColors closeButton position="top-center" />
   <Todo />
  </TodoProvider>
 </StrictMode>
);
