import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TASK1() {
	const navigate = useNavigate();
	return (
		<div className="app">
			<button onClick={() => navigate("/")}>Home</button>
			<h1>Task 1</h1>
			<h3>Hello World</h3>
			<Counter />
			<FormComponent />
		</div>
	);
}

function Counter() {
	const [counter, setCounter] = useState(0);

	function handleDecrease() {
		setCounter((last) => (last <= 0 ? 0 : last - 1));
	}

	return (
		<div>
			<span>Counter {counter}</span>
			<button value={counter} onClick={() => setCounter((last) => last + 1)}>
				Increase
			</button>
			<button value={counter} onClick={handleDecrease}>
				Decrease
			</button>
		</div>
	);
}

function FormComponent() {
	const [name, setName] = useState("");
	const [phoneNo, setPhoneNo] = useState("");

	function handleSubmit() {
		alert(`Name:${name} Phone no: ${phoneNo}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<input value={name} onChange={(e) => setName(e.target.value)} type="text" />
			<label>Number</label>
			<input value={phoneNo} onChange={(e) => setPhoneNo(Number(e.target.value))} type="number" />
			<button>Submit</button>
		</form>
	);
}
