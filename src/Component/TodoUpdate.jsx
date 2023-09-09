import React, { useState } from "react";

function TodoUpdate({ handleChange, Todo }) {
	const [updateName, setUpdateName] = useState(Todo.name);
	const handleSubmit = (e) => {
		e.preventDefault();
		handleChange(updateName, Todo.id);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={updateName}
					onChange={(e) => setUpdateName(e.target.value)}
				/>
				<button type="submit">UPDATE</button>
			</form>
		</div>
	);
}

export default TodoUpdate;
