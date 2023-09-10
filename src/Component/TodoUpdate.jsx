import React, { useState } from "react";
import "../App.css";
function TodoUpdate({ handleChange, Todo }) {
	const [updateName, setUpdateName] = useState(Todo.name);
	const handleSubmit = (e) => {
		e.preventDefault();
		handleChange(updateName, Todo.id);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="todoupdatecontent">
				<input
					type="text"
					value={updateName}
					onChange={(e) => setUpdateName(e.target.value)}
				/>
				<button type="submit">UPDATE</button>
			</div>
		</form>
	);
}

export default TodoUpdate;
