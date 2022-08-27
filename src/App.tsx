import React, { FC } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: FC = () => {
  
  return (
    <div>
      <header className="w-full h-24 flex justify-center items-center bg-green-400">
        <div className="text-center text-4xl font-bold">Todo List</div>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
