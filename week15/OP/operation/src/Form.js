import React, { useState } from 'react';


const Form = ({addTodo})=>{
   
    const [todo, setTodo] = useState("");

    const HandleSubmit = (e) =>{
        e.preventDefault();
        
        if(todo.trim()){
            addTodo({
                id:Date.now(),
                task:todo.trim(),
            });
            setTodo("")
        }
    }
    
        return(
            <div>
                
                <form onSubmit={HandleSubmit}>
                    <input
                    type="text"
                    placeholder='Add new todo'
                    value={todo}
                    onChange={(e) =>setTodo(e.target.value)}/>
                    <button>ADD Task</button>
                </form>
        
            </div>
        )
    


};
export default Form;


