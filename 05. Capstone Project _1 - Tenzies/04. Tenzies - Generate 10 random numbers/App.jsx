import Die from "./Die"

/**
 * Challenge:
 *
 * Write a function (generateAllNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

export default function App() {
	function generateAllNewDice() {
		return new Array(10)
				.fill(0)
				.map(() => Math.ceil(Math.random() * 6))
	}

	return (
			<main>
				<div className="dice-container">
					{generateAllNewDice().map(value => <Die value={value}/>)}
				</div>
			</main>
	)
}