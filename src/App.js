import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Task 1</h1>
			<h3>Hello World</h3>
			<Counter />
			<FormComponent />
			<h1>Task 2</h1>
			<ImageComponent />
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

function ImageComponent() {
	const [imgToggle, setImgToggle] = useState(false);

	return (
		<div>
			<button onClick={() => setImgToggle((last) => !last)}>{imgToggle ? "Hide Image" : "Show Image"}</button>
			<br></br>
			{imgToggle && (
				<img
					src="https://media.istockphoto.com/id/915681526/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=L5ZbPXc0iBCgz7zL6nP-Det8lXCLXeUxxBW8TBNPLVQ="
					alt="Some image"
				/>
			)}
		</div>
	);
}
export default App;
