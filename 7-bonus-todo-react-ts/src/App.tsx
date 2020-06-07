import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Wynieś śmieci na spacer',
    complete: false
  },
  {
    text: 'Oczyść regał główny w piwnicy',
    complete: true
  }

];



function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo, 
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
      <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>  
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>  
      </ul>
    );
}

export default App;
