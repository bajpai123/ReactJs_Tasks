import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import { TASK1 } from "./TASK1";
import { TASK2 } from "./TASK2";
import { TASK4 } from "./TASK4";
import { TASK5 } from "./TASK5";
import { TASK6 } from "./TASK6";
import { USER } from "./USER";
function App() {
	return (
		<Routes>
			<Route path="/" element={<HOME />} />
			<Route path="/task1" element={<TASK1 />} />
			<Route path="/task2" element={<TASK2 />} />
			<Route path="/task4" element={<TASK4 />} />
			<Route path="/task5" element={<TASK5 />} />
			<Route path="/task6" element={<TASK6 />} />
			<Route path="/task4/:slug" element={<USER />} />
			<Route path="*" element={<NOMATCH />} />
		</Routes>
	);
}

function HOME() {
	const navigate = useNavigate();
	return (
		<div className="app">
			<button className="btn" onClick={() => navigate("task1")}>
				Task 1
			</button>
			<button className="btn" onClick={() => navigate("task2")}>
				Task 2
			</button>
			<button className="btn" onClick={() => navigate("task3")}>
				Task 3
			</button>
			<button className="btn" onClick={() => navigate("task4")}>
				Task 4
			</button>
			<button className="btn" onClick={() => navigate("task5")}>
				Task 5
			</button>
			<button className="btn" onClick={() => navigate("task6")}>
				Task 6
			</button>
		</div>
	);
}

function NOMATCH() {
	return (
		<div>
			<h2>This is default landing page in case no route is found</h2>
		</div>
	);
}
export default App;
