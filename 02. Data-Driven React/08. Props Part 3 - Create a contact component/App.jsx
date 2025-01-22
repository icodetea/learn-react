/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Contact from "./components/Contact";
import React from "react";

function App() {
	return (
			<div className="contacts">
				<Contact
						image="./images/mr-whiskerson.png"
						alt="Prof. Whiskerson"
						name="Prof. Whiskerson"
						phone="(212) 555-1234"
						email="whiskerson@me.com">
				</Contact>
				<Contact
						image="./images/fluffykins.png"
						alt="Photo of Fluffykins"
						name="Fluffykins"
						phone="(212) 555-2345"
						email="fluff@me.com"/>
				<Contact
						image="./images/felix.png"
						alt="Photo of Felix"
						name="Felix"
						phone="(212) 555-4567"
						email="thecat@hotmail.com"/>
				<Contact
						image="./images/pumpkin.png"
						alt="Photo of Pumpkin"
						name="Pumpkin"
						phone="(0800) CAT KING"
						email="pumpkin@scrimba.com"/>
			</div>
	)
}

export default App