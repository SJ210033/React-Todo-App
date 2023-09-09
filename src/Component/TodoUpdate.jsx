import React, { useState } from "react";

function TodoUpdate({ toChange, handleChange }) {
	const [updateName, setUpdateName] = useState(toChange);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleChange(updateName);
	};

	return (
		<div>
			<form onSubmit={() => handleSubmit}>
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
