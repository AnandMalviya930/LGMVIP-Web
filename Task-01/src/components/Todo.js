import React from 'react';

const Todo = ({text ,todo, todos , settodos}) =>{

    const deletehandle = () => {
    settodos(todos.filter((el) => el.id !== todo.id));
    };
    const completehandle = () =>{
        settodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }
            return item;
        })
        );
    };
    return(
     <div className="todo">
         <li className={`to-do item ${todo.completed ? "completed" : ''}`}>{text}</li>
          <button onClick={completehandle} className="complete-btn"><i className="fas fa-check"></i></button> 
          <button onClick={deletehandle} className="trash-btn"><i className="fas fa-trash"></i></button> 
         </div>

    );
}
export default Todo;