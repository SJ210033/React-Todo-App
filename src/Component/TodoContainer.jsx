import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoAdd from "./TodoAdd";

function TodoContainer() {
	const [todo, setTodo] = useState([]);

	const handleUpdate = (id) => {};
	const handleDelete = (id) => {};
	const handleAdd = (toadd) => {};

	return (
		<div>
			<TodoAdd handleAdd={handleAdd} />
			<TodoDisplay
				todo={todo}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
			/>
		</div>
	);
}

export default TodoContainer;
