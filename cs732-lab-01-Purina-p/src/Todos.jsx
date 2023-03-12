function Todos({ todos }) {

    return (
        <div>
            <ul>
                {todos.map((todos, index) => (<div key={index}>
                    <input type="checkbox" checked={todos.isComplete} onchange={}/>{todos.description}
                    {todos.isComplete&&"(Done!)"}
                </div>))}
            </ul>
        </div>

    )
}

export default Todos;
