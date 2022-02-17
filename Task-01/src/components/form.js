import React from 'react';

const Form = ({setInputText, inputText , todos, settodos}) =>{
    const inputTexthandle = (e) =>{
      console.log(e.target.value);
      setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
       e.preventDefault();
       settodos([
           ...todos,{text: inputText, completed : false,id:Math.random() * 1000},
       ]);
       setInputText("");
    };
    return(
        <form>
            <input  value = {inputText} onChange={inputTexthandle} type="text" className="todo-input" placeholder='Add your day routine'/>
            <button onClick={submitTodoHandler} class="todo-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
        </form>
    );
}
export default Form;
