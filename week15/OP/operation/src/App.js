import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./Item"


const App = () => {
    
    const [todos, setTodos] = useState([]);
   
   const addTodo= (todo) =>{
     setTodos([...todos, todo])
   }
    
   const todoDelete = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id) )
   }

    return (
        <>
        <h1>Todo's</h1>
        
            <Form addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} todoDelete={todoDelete} ></TodoItem>
                ))}
            </ul>
        </>
    )


};


export default App;






