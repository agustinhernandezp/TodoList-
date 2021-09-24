import React, { useState } from "react";

function TodoApp() {
	const [Tarea, setTarea] = useState("");
	const [Tarealist, setTareaList] = useState([]);

	const handleChange = e => {
		setTarea(e.target.value);
	};

	const AddTarea = () => {
		if (Tarea !== "") {
			const TareaDetails = {
				id: Math.floor(Math.random() * 1000),
				value: Tarea,
				isCompleted: false
			};

			setTareaList([...Tarealist, TareaDetails]);
		}
	};

	const deleteTarea = (e, id) => {
		e.preventDefault();
		setTareaList(Tarealist.filter(t => t.id != id));
	};

	const TareaCompleted = (e, id) => {
		e.preventDefault();
		//buscar indice del elemnto
		const element = Tarealist.findIndex(elem => elem.id == id);

		//copia el contenido en una nueva variable
		const newTareaList = [...Tarealist];

		newTareaList[element] = {
			...newTareaList[element],
			isCompleted: true
		};

		setTareaList(newTareaList);
	};

	return (
		<div className="container text-center mt-5">
			<div className="todo mt-5">
				<h1>Todo List:</h1>
				<input
					type="text"
					name="text"
					id="text"
					onChange={e => handleChange(e)}
				/>
				<button
					className="btn btn-block btn-sm btn-primary"
					onClick={AddTarea}>
					Agregar
				</button>
				<br />
				{Tarealist !== [] ? (
					<ul>
						{Tarealist.map(t => (
							<li
								className={
									t.isCompleted ? "crossText" : "listitem"
								}>
								{t.value}

								<button
									className="btn-warning btn-sm"
									onClick={e => deleteTarea(e, t.id)}>
									Delete
								</button>
							</li>
						))}
					</ul>
				) : null}
			</div>
			<p className=" alert alert-light">
				Cantidad de tareas: {Tarealist.length}
			</p>
		</div>
	);
}

export default TodoApp;
