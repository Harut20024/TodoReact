import './Todofooter.css';

function Todofooter({ todos,onClearCompleted }) {
    const length = todos.filter((todo) => todo.isComplited === true).length
    return (
        <div>
            <span> {length}/{todos.length} complited</span>
            <button id='click' onClick={onClearCompleted}>Clear complated</button>
        </div>
    )
}

export default Todofooter