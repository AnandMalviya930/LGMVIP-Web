import React from "react";
import Todo from "./Todo"; 
const Todolist = ({todos , settodos}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
             {todos.map((todo) =>(
                 <Todo   settodos={settodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
             ))}
            </ul>
        </div>
    );
};

export default Todolist;