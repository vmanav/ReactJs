import React from 'react';
import TodoItem from './TodoItem';

import './styles.css';
import todosData from './todosData';

class App extends React.Component{
	
	constructor(){
		super()
		this.state = {
			todos : todosData
		}
	}
	
	render() {
		
		const todosComponentsArray = this.state.todos.map((todo) => {
			return <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
		})

		return (
			<div className="todo-list">
				{todosComponentsArray}
			</div>
		);
	}
}

// function App() {

	

// }

export default App;
