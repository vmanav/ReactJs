import React from 'react';

function TodoItem(props){
    return(
        <div className='todo-item'>
            <input type="checkbox" checked={props.completed} />
            <p style={{'text-decoration' : props.completed? "line-through" : "none"}} >{props.text}</p>
        </div>
    )
}

export default TodoItem;