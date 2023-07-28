import { useLocation, useNavigate } from "react-router-dom";
/*
{
		name: "Bard",
		age: 30,
		eyeColor: "blue",
		gender: "male",
		company: "Google",
		email: "bard@google.com",
		phone: "+1 555 555 5555",
		address: {
			"street": "123 Main Street",
			"city": "Mountain View",
			"state": "CA",
			"zip code": "94043",
		},
		hobbies: ["coding", "reading", "traveling"],
		slug: "bard-the-slugasaurus",
	},
     */
export function USER() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const user = state.elem;

	return (
		<div>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Eye Color: {user.eyeColor}</p>
			<p>Gender: {user.gender}</p>
			<p>Working In: {user.company}</p>
			<p>Mail: {user.email}</p>
			<p>Contact: {user.phone}</p>
			<p>Address:</p>
			<p>Street : {user.address.street}</p>
			<p>City : {user.address.city}</p>
			<p>State : {user.address.state}</p>
			<p>Zip : {user.address["zip code"]}</p>
			<p>Hobbies: {user.hobbies.join(", ")}</p>
			<button onClick={() => navigate("/task4")}>Back</button>
		</div>
	);
}
