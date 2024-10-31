import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <main className="min-h-screen flex justify-center items-center text-3xl font-bold">
   <p className="border-black border-b-2 leading-10">React Starter Template</p>
  </main>
 </StrictMode>
);
