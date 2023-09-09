import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoDisplay({ todo, handleUpdate, handleDelete, handleComplete }) {
	return (
		<div>
			<table>
				<tbody>
					{todo.map((m) => (
						<tr key={m.id}>
							<td>
								<input
									type="checkbox"
									checked={m.completed}
									onChange={() => handleComplete(m.id)}
								/>
							</td>
							<td style={m.completed ? { textDecoration: "line-through" } : {}}>
								{m.name}
							</td>
							<td>
								<FontAwesomeIcon
									icon={faPenToSquare}
									onClick={() => handleUpdate(m.id)}
								/>
							</td>
							<td>
								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => handleDelete(m.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TodoDisplay;
