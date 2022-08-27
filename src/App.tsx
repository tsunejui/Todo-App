import React, { FC, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './models/Todo.model';

const App: FC = () => {
  
  const [ data, setData ] = useState<Todo[]>([]);

  const handleAddTodoItem = (input: string) => {
    setData(pList => [...pList, {
      id: data.length + 1,
      description: input
    }])
  };

  const handleRemoveTodoItem = (id: number) => {
    setData(pList => pList.filter(item => item.id !== id));
  };

  return (
    <div>
      <header className="w-full h-24 flex justify-center items-center bg-green-400">
        <div className="text-center text-4xl font-bold">Todo List</div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList data={data} handleRemoveTodoItem={handleRemoveTodoItem} />
    </div>
  );
}

export default App;
