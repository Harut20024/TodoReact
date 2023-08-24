import Todoitem from "./Todoitem"

function Todolist({todos,onChange,onDelete}) {

    return (
        <div>
            {todos.map((todo) => {
               return(
                <Todoitem 
                key={todo.id} 
                todo = {todo}
                onChange={onChange}
                onDelete={onDelete}/>
               )
            })}
        </div>
    )
}

export default Todolist