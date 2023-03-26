import styles from './Todos.module.css';

function Todos({ todos, ChangeIsComplete }) {

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <div key={index} className={styles.todo}>
                        <label className={todo.isComplete ? styles.done: undefined}>
                            <input type="checkbox"
                                defaultChecked={todo.isComplete}
                                checked={todo.isComplete}
                                onChange={(e) => ChangeIsComplete(todo, e.target.checked)} />
                            {todo.description}
                            {todo.isComplete ? <span>(Done!)</span> : <span></span>}
                        </label>
                    </div>))}
            </ul>
        </div>

    )
}
// 正常展示checkbox的todolist,然后监听他是否被check，如果check,使用onchange去记录他的改变,并将todo的这一一项传回前面的ChangeIsComplete中让他的description发生改变.
// e.target.checked 返回的就是是否打勾，也就是true or false
//想要使用分块的插件，例如styles.todo 必须要把css命名为xxx.module.css
export default Todos;
