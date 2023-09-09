import React, { useState } from "react";

function TodoAdd({ handleAdd }) {
	const [add, setAdd] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAdd(add);
	};
	return (
		<div>
			<form onSubmit={() => handleSubmit}>
				<input
					type="text"
					value={add}
					onChange={(e) => {
						setAdd(e.target.value);
					}}
				/>
				<button type="submit">ADD</button>
			</form>
		</div>
	);
}

export default TodoAdd;
