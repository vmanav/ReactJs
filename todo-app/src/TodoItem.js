import React from 'react';

function TodoItem(props){
    return(
        <div className='todo-item'>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                // onChange={props.handleChange} 
                // Now if we do thi then our handleChange function will recive event target 
                onChange = {() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;
// style={{textDecoration : props.completed? "line-through" : "none"}} 