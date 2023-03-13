function Todos({ todos, ChangeIsComplete }) {

    return (
        <div>
            <ul>
                {todos.map((todos, index) => (<div key={index}>
                    <input type="checkbox" checked={todos.isComplete} onchange={(e) => ChangeIsComplete(todo, e.target.checked)} />{todos.description}
                    {todos.isComplete ? <span>(Done!)</span>:<span></span>}
                </div>))}
            </ul>
        </div>

    )
}

export default Todos;
