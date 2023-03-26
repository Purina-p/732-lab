import { useState } from "react";

export default function NewTodoItem({onAddTodo}) {
    const [description, setDescription] = useState('');

    return (
        <div>
            <label>Description:</label>
            <input type="text" value={description}
                onInput={e => setDescription(e.target.value)} />
            <button onClick={()=> onAddTodo(description)}>Add</button>
        </div>
    )

}