import React from "react";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export class Star extends React.Component {
	render() {
		let starIcon = this.props.isFilled ? starFilled : starEmpty
		let altText = this.props.isFilled ? "filled star icon" : "empty star icon"
		return <button
				onClick={this.props.handleClick}
				aria-pressed={this.props.isFilled}
				aria-label={this.props.isFilled ? "Remove from favorites" : "Add to favorites"}
				className="favorite-button">
			<img src={starIcon}
			     alt={altText}
			     className="favorite"/>
		< /button>
	}
}