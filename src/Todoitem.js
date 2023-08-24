import './Todoitem.css';

function Todoitem({todo,onChange,onDelete}){
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.isComplited} onChange={(evt)=>{
                   onChange({
                    ...todo,
                    isComplited: evt.target.checked
                   })
                }}/>
                {todo.text} 
                <button onClick={()=>{
                    onDelete(todo)
                }}>x</button>
            </label>
        </div>
    )
}

export default Todoitem