import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './toDoItem';

function MainContent() {

    return (
        <div className="todo-list">
            <h1>To-Do list Jason</h1>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div >

    )
}

export default MainContent;