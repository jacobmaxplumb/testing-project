import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodoItem = () => {
    setTodos([...todos, text]);
    setText('');
  }

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
