import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoAdd from "./TodoAdd";
import TodoUpdate from "./TodoUpdate";

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
		<div>
			{updating > 0 ? (
				<TodoUpdate
					Todo={todo.find((m) => m.id === updating)}
					handleChange={handleChange}
				/>
			) : (
				""
			)}

			<TodoAdd handleAdd={handleAdd} />
			<TodoDisplay
				todo={todo}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleComplete={handleComplete}
			/>
		</div>
	);
}

export default TodoContainer;
