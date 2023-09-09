import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";

function TodoContainer() {
	const [todo, setTodo] = useState([]);

	const handleUpdate = (id) => {};
	const handleDelete = (id) => {};

	return (
		<div>
			<TodoDisplay
				todo={todo}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
			/>
		</div>
	);
}

export default TodoContainer;
