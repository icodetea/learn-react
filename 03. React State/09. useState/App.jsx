import React from "react"

export default function App() {

	/**
	 * Challenge: Replace our hard-coded "Yes" on the page with
	 * some state initiated with React.useState()
	 */

	const [result, func] = React.useState("Yes")
	console.log(result)

	function handleClick() {
		React.useState("No")
	}

	return (
			<main>
				<h1 className="title">Is state important to know?</h1>
				<button className="value" onClick={handleClick}>{result}</button>
			</main>
	)
}
