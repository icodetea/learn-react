import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
	const [pads, setPads] = React.useState(padsData)

	function toggle(id) {
		console.log(id)
		setPads(pads.map(pad => pad.id === id ? {...pad, on: !pad.on} : pad))
	}

	const buttonElements = pads.map(pad => (
			<Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
	))

	return (
			<main>
				<div className="pad-container">
					{buttonElements}
				</div>
			</main>
	)
}
