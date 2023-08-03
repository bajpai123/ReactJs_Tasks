import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function TASK6() {
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate("/")}>Home</button>
			<h2>Task 6</h2>
			<DataInTable />
		</div>
	);
}

function DataInTable() {
	const [tableData, setTableData] = useState([]);

	useEffect(
		function () {
			fetch("https://jsonplaceholder.typicode.com/posts")
				.then((data) => data.json())
				.then((data) => {
					setTableData(data);
				})
				.catch((err) => console.log(err));
		},
		[setTableData]
	);

	return (
		<>
			{tableData.length > 0 ? (
				<table className="table">
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((data, index) => {
							return (
								<tr key={index}>
									<td>{data.id}</td>
									<td>{data.title}</td>
									<td>{data.body}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p>No data found</p>
			)}
		</>
	);
}

export default TASK6;
