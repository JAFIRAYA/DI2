import React from "react";

const TodoItem = ({todo,todoDelete}) => {
    const HandleDelete = () =>{
        todoDelete(todo.id)
    };
    return <li onClick={HandleDelete}>{todo.task}</li>
}
export default TodoItem