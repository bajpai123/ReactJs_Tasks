import { useNavigate } from "react-router-dom";

const exampleContent = [
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
	{
		name: "Alice",
		age: 25,
		eyeColor: "brown",
		gender: "female",
		company: "Microsoft",
		email: "alice@microsoft.com",
		phone: "+1 555 555 5556",
		address: {
			"street": "456 Elm Street",
			"city": "Redmond",
			"state": "WA",
			"zip code": "98052",
		},
		hobbies: ["dancing", "painting", "hiking"],
		slug: "alice-the-wonderland",
	},
	{
		name: "Bob",
		age: 40,
		eyeColor: "green",
		gender: "male",
		company: "Apple",
		email: "bob@apple.com",
		phone: "+1 555 555 5557",
		address: {
			"street": "789 Oak Street",
			"city": "Cupertino",
			"state": "CA",
			"zip code": "95014",
		},
		hobbies: ["surfing", "playing guitar", "coding"],
		slug: "bob-the-builder",
	},
	{
		name: "Carol",
		age: 35,
		eyeColor: "hazel",
		gender: "female",
		company: "Amazon",
		email: "carol@amazon.com",
		phone: "+1 555 555 5558",
		address: {
			"street": "1011 Pine Street",
			"city": "Seattle",
			"state": "WA",
			"zip code": "98101",
		},
		hobbies: ["reading", "cooking", "gardening"],
		slug: "carol-the-farmer",
	},
	{
		name: "Dave",
		age: 20,
		eyeColor: "black",
		gender: "male",
		company: "Tesla",
		email: "dave@tesla.com",
		phone: "+1 555 555 5559",
		address: {
			"street": "1212 Maple Street",
			"city": "Palo Alto",
			"state": "CA",
			"zip code": "94301",
		},
		hobbies: ["coding", "robotics", "surfing"],
		slug: "dave-the-coder",
	},
];
export function TASK4() {
	const navigate = useNavigate();
	return (
		<div className="app">
			<button onClick={() => navigate("/")}>Home</button>
			<h1>Task 4</h1>

			{exampleContent.map((elem) => (
				<UserInfo elem={elem} key={elem.slug} />
			))}
		</div>
	);
}

function UserInfo({ elem }) {
	const navigate = useNavigate();
	return (
		<div style={{ border: "1px solid black", padding: 10, maxWidth: "50%" }}>
			<p>
				<strong>{elem.name}</strong>, <em>{elem.age} yrs old</em>
			</p>
			<p>
				<u>{elem.company}</u>
			</p>

			<button onClick={() => navigate(`/task4/${elem.slug}`, { state: { elem } })}>Details</button>
		</div>
	);
}
