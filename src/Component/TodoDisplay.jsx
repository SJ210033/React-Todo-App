import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoDisplay({ todo, handleUpdate, handleDelete, handleComplete }) {
	return (
		<div>
			{todo.map((m) => (
				<div className="tododisplay" key={m.id}>
					<div>
						<input
							type="checkbox"
							checked={m.completed}
							onChange={() => handleComplete(m.id)}
						/>
					</div>
					<div>
						<h6
							style={
								m.completed
									? {
											textDecoration: "line-through",
											textDecorationColor: "#1c1a40",
									  }
									: {}
							}
						>
							{m.name}
						</h6>
					</div>
					<div>
						<FontAwesomeIcon
							icon={faPenToSquare}
							onClick={() => handleUpdate(m.id)}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							icon={faTrash}
							onClick={() => handleDelete(m.id)}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default TodoDisplay;
