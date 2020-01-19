import React from 'react';
import ReactDOM from 'react-dom'

// function ToDoItem(props) {
//     return (
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} />
//             <p>{props.item.text}</p>
//         </div>
//     )
// }

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem