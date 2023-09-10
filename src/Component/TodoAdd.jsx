import React, { useState } from "react";
import "../App.css";

function TodoAdd({ handleAdd }) {
	const [add, setAdd] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(add);
		setAdd("");
	};
	return (
		<div className="todoadd">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter your Task"
					required
					value={add}
					onChange={(e) => {
						setAdd(e.target.value);
					}}
				/>
				<button type="submit">ADD TASK</button>
			</form>
		</div>
	);
}

export default TodoAdd;
