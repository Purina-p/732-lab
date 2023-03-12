function ToDolist({ items }) {
    return (
        items.length !== 0 ? (<div>
            <ul>
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>) : (<div>
            <p>There is no to-do items</p>
        </div>)


    )
}
// can't use if in return, so we need to use !==0 ?(1):(2)
// this function means, if the items no empty we retrun 1,else we return 2

export default ToDolist;
