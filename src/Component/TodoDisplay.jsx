import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoDisplay({ todo, handleUpdate, handleDelete }) {
	return (
		<div>
			<table>
				<tbody>
					{todo.map((m) => (
						<tr key={m.id}>
							<td>
								<input type="checkbox" />
							</td>
							<td>{m.name}</td>
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
