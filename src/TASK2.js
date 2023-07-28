import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TASK2() {
	const navigate = useNavigate();
	return (
		<div className="app">
			<button onClick={() => navigate("/")}>Home</button>
			<h1>Task 2</h1>
			<ImageComponent />
		</div>
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
