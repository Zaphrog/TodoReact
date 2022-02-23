//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function TodoList(props) {
	console.log("HEEELLLLLOOOOOO");
	const [todo, setTodo] = useState([]);
	const [task, setTask] = useState("");
	const [taskToDelete, setTaskToDelete] = useState("");
	function addTask() {
		if (task != "") {
			setTodo([...todo, task]);
			setTask("");
		}
	}
	function deleteTask() {
		console.log("DELETE TASK CALLED");
		let newList = todo;
		newList.splice(taskToDelete - 1, 1);
		setTodo(newList);
		setTaskToDelete("");
	}
	return (
		<div>
			<input
				type="text"
				onChange={(e) => setTask(e.target.value)}
				value={task}
				placeholder="Please type your name"
			/>
			<button onClick={() => addTask()}>Add task</button>
			<ol>
				{todo.length === 0 && <li>No tasks</li>}
				{todo.length != 0 && todo.map((t) => <li>{t}</li>)}
			</ol>
			<input
				type="text"
				onChange={(e) => setTaskToDelete(e.target.value)}
				value={taskToDelete}
				placeholder="Please enter the number of the task to delete"
			/>
			<button onClick={() => deleteTask()}>Delete Task </button>
		</div>
	);
}

//render your react application
ReactDOM.render(<TodoList />, document.querySelector("#app"));
