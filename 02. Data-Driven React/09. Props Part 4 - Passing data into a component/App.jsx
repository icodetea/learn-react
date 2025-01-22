import Contact from "./Contact"

/**
 * Challenge (I'm sorry!): Add all the rest of the
 * data to the contact card instances. 😈
 */

function App() {
	return (
			<div className="contacts">
				<Contact
						img="./images/mr-whiskerson.png"
						name="Mr. Whiskerson"
						phone="(212) 555-1234"
						email="whiskerson@me.com"/>
				<Contact
						img="./images/fluffykins.png"
						name="Fluffykins"
						phone="(212) 555-2345"
						email="fluff@me.com"/>
				<Contact
						img="./images/felix.png"
						name="Felix"
						phone="(212) 555-4567"
						email="thecat@hotmail.com"/>
				<Contact
						img="./images/pumpkin.png"
						name="Pumpkin"
						phone="(0800) CAT KING"
						email="pumpkin@scrimba.com"/>
			</div>
	)
}

export default App