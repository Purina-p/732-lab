import Aboutme from "./Aboutme";
import { useState } from "react";
import ToDolist from "./ToDolist";
import './App.css';
import Lightbulb from "./Lightbulb";
import Todos from "./Todos"

const intialtodos = [
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }
]

function App() {

  const [todos, setTodos] = useState(intialtodos);
  // 将todos初始化，设为initialtodos

  function ChangeIsComplete(todo, e) {

    const index = todos.indexOf(todo);
    // 寻找todo里面的索引
    const newTodos = [...todos];
    // 继承我之间改变过的或者是未改变的列表

    newTodos[index] = {
      description: todo.description,
      isComplete: e
    }
    // 把有着特定index的todo改变他的description，同时改变他的isComplete
    setTodos([...newTodos])

  }


  return (
    <div>
      <h1>About me</h1>
      <Aboutme name="Purina" age="22" hobby="films" />
      <ToDolist items={["Finish lecture", "Do homework", "Sleep"]} />
      <h1>My light bulb</h1>
      <Lightbulb />
      <h1>My todos</h1>
      <Todos todos={todos} ChangeIsComplete={ChangeIsComplete} />
    </div>
  );
}

export default App;
