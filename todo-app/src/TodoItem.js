import React from 'react';

function TodoItem(props){
    const doneValaStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className='todo-item'>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                // onChange={props.handleChange} 
                // Now if we do thi then our handleChange function will recive event target 
                onChange = {() => props.handleChange(props.item.id)}
            />
            <p 
                style={props.item.completed ? doneValaStyle : null}
            >
            {props.item.text}
            </p>
        </div>
    )
}

// ALTERNATIVE WAY =>
{/* <p 
style={{
    textDecoration: props.item.completed? "line-through" : "none",
    fontStyle: props.item.completed? "italic" : "none"
    }}
>
{props.item.text}
</p> */
}
export default TodoItem;
