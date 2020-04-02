import React from 'react';
import TodoItem from './TodoItem';

import './styles.css';
import todosData from './todosData';

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(id) {
		this.setState((prevState) => {
			const updatedTodos = prevState.todos.map((item)=>{
				// if(item.id === id) {
				// 	item.completed = !item.completed; //1
				// }
				// here when we have written line 1 , since the objects are passed by reference it is updating the same varible id.e prevState
				// so we will do this ->
				if(item.id === id){
					return {
						...item,
						completed : !item.completed
					}
				}
				return item;
			})
			// console.log("prevState - ", prevState);
			return {
				todos : updatedTodos
			}
		})
		console.log("changed id -", id)
	}

	render() {

		const todosComponentsArray = this.state.todos.map((todo) => {
			return	<TodoItem 
						key={todo.id}
						item={todo}
						handleChange={this.handleChange}
					/>
			// `handleChange` ko bhi ek prop bna ke bhej dia
		})

		return (
			<div className="todo-list">
				{todosComponentsArray}
			</div>
		);
	}
}

export default App;
