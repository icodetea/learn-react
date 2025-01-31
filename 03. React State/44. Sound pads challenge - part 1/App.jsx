import {useState} from "react";
import pads from "./pads"


export default function App(props) {
	/**
	 * Challenge part 1:
	 * 1. Initialize state with the default value of the
	 *    array pulled in from pads.js
	 * 2. Map over that state array and display each one
	 *    as a <button> (CSS is already written for you)
	 *    (Don't worry about using the "on" or "color"
	 *    properties yet)
	 */
	const [padArray, setPads] = useState(pads)
	const style = {
		backgroundColor: props.darkMode ? "#222222" : "#cccccc",
	};
	return (
			<main>
				<div className="pad-container">
					{padArray.map(pad => {
						return <button style={style} key={pad.id} className="pad">{pad.name}</button>;
					})}
				</div>
			</main>
	)
}
