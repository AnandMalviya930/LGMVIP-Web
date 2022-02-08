import React,{useState} from "react";
import './App.css';
import Form from "./components/form";
import Todolist from "./components/todolist"

function App(){
  const [inputText,setInputText] = useState(""); 
  const [todos,settodos] = useState([]); 
  return(
    <div classname="App">
      <header>
      <h2>My Today's Checklist</h2>
      <Form  inputText = {inputText} todos={todos}  settodos={settodos} setInputText={setInputText}/>
      <Todolist settodos={settodos} todos={todos} />
      </header>
      </div>
  );
}

export default App;
