import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoAdd from "./TodoAdd";
import TodoUpdate from "./TodoUpdate";
import "../App.css";
function TodoContainer() {
	const [todo, setTodo] = useState([]);
	const [updating, setupdating] = useState(0);

	const handleUpdate = (id) => {
		setupdating(id);
	};

	const handleChange = (updatedname, id) => {
		setTodo(
			todo.map((m) => {
				return m.id === id ? { ...m, name: updatedname } : m;
			}),
		);
		setupdating(0);
	};
	const handleDelete = (id) => {
		setTodo(todo.filter((m) => m.id !== id));
	};

	const handleComplete = (id) => {
		setTodo(
			todo.map((m) => {
				return m.id === id ? { ...m, completed: !m.completed } : m;
			}),
		);
	};
	const handleAdd = (toadd) => {
		setTodo([...todo, { id: todo.length + 1, name: toadd, completed: false }]);
	};
	return (
		<div className="todocontainer">
			<h1>Tasks To Do</h1>
			{updating > 0 ? (
				<div className="todoupdate">
					<TodoUpdate
						Todo={todo.find((m) => m.id === updating)}
						handleChange={handleChange}
					/>
				</div>
			) : (
				" "
			)}

			<TodoAdd handleAdd={handleAdd} />
			<div className="tododisplayall">
				<TodoDisplay
					todo={todo}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
					handleComplete={handleComplete}
				/>
			</div>
		</div>
	);
}

export default TodoContainer;
