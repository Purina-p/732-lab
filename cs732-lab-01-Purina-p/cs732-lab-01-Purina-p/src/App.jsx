import Aboutme from "./Aboutme";
import ToDolist from "./ToDolist";
import './App.css';
import Lightbulb from "./Lightbulb";

function App() {

  const todos=[
    {description:'Finish lecture',isComplete:true},
    {description:'Do homework',isComplete:flase},
    {description:'Sleep',isComplete:true}
  ]

  return (
    <div>
      <h1>About me</h1>
      <Aboutme name="Purina" age="22" hobby="films" />
      <ToDolist items={["Finish lecture", "Do homework", "Sleep"]} />
      <h1>My light bulb</h1>
      <Lightbulb />
      <h1>My todos</h1>
      <Todos todos={todos}/>

    </div>
  );
}

export default App;