import {Component} from "react";

export class Main extends Component {
	render() {
		return (
				<main>
					<form className="add-ingredient-form">
						<input
								type="text"
								aria-label="Add ingredient"
								placeholder="e.g. oregano"
						></input>
						<button>Add ingredient</button>
					</form>
				</main>
		)
	}
}