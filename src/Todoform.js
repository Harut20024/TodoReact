import { useState } from "react";
import './Todoform.css';

function Todoform({ onAdd }) {
    const [text, settext] = useState("");

    const handleAdd = (evt) => {
        evt.preventDefault();
        // Check if the input is not empty and not just spaces
        if (text.trim() !== "") {
            onAdd(text);
        }
        else alert("Please write anything")
        settext("");
    };

    return (
        <form onSubmit={handleAdd}>
            <input type="text" value={text} onChange={(ent) => settext(ent.target.value)} />
            <button>add</button>
        </form>
    );
}

export default Todoform;
