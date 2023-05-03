import React from 'react';
 import { Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
 import './App.css';
//  import Home from './Components/Home';
//  import Users from './Components/Users';
//  import Contact from './Components/Contact';
// import Notfound from './Components/NotFound';
// import ItemList from './Components/ItemList';
import { useState, useCallback } from "react";
import Todos from './Components/Todos';

 function App() {
 
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
    console.log("dnfjlkj")
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      
    </>
  );
 }

 export default App;
