import React from 'react';
import TodoItem from './TodoItem';

import './styles.css';
import todosData from './todosData';

function App() {

	const todosComponentsArray = todosData.map((todo) => {
		return <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
	})


	return (
		<div className="todo-list">
			{todosComponentsArray}
		</div>
	);
}

export default App;
