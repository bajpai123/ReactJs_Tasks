// Description: Create a basic Contact Form using React.
// The form should have fields for the user to enter their name, email, and message.
//  When the form is submitted, the data should be displayed on the screen.

import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export function TASK5() {
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate("/")}>Home</button>
			<h2>Task 5</h2>
			<ContactForm />
		</div>
	);
}

function ContactForm() {
	const [userData, dispatcher] = useReducer(formReducer, formInitialState);
	const [formSubmitted, setFormSubmitted] = useState(false);

	function handleFormSubmission() {
		setFormSubmitted(true);
	}
	return (
		<div>
			<form onSubmit={handleFormSubmission}>
				Name:
				<input
					type="text"
					value={userData.name}
					onChange={(e) => dispatcher({ type: "name", name: e.target.value })}
				/>
				Email:
				<input
					type="text"
					value={userData.email}
					onChange={(e) => dispatcher({ type: "email", email: e.target.value })}
				/>
				Message:
				<input
					type="text"
					value={userData.message}
					onChange={(e) => dispatcher({ type: "message", msg: e.target.value })}
				/>
				<button>Submit</button>
			</form>

			{formSubmitted && (
				<p>
					Your name is {userData.name} with email address is {userData.email}. Your message is{" "}
					{userData.message}{" "}
				</p>
			)}
		</div>
	);
}

function formReducer(state, action) {
	switch (action.type) {
		case "name": {
			return { ...state, name: action.name };
		}
		case "email": {
			return { ...state, email: action.email };
		}
		case "message": {
			return { ...state, message: action.msg };
		}
		default:
			return state;
	}
}

const formInitialState = {
	name: "",
	email: "",
	message: "",
};


git config --global user.name "Your Name"